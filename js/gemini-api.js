// QuestionCraft BD - Gemini AI Integration
// =========================================

class GeminiAPI {
    constructor() {
        this.apiKey = CONFIG.GEMINI_API_KEY;
        this.model = CONFIG.GEMINI_MODEL;
        this.baseURL = CONFIG.GEMINI_BASE_URL;
        this.requestCount = 0;
        this.lastRequestTime = Date.now();
    }
    
    /**
     * Generate questions using AI
     */
    async generateQuestions(options = {}) {
        const {
            topic,
            count = 5,
            difficulty = 'medium',
            questionType = 'mcq',
            classLevel = '10',
            language = 'bn'
        } = options;
        
        // Build prompt
        const prompt = this.buildPrompt(topic, count, difficulty, questionType, classLevel, language);
        
        try {
            // Check rate limit
            this.checkRateLimit();
            
            // Make API call
            const response = await this.callGeminiAPI(prompt);
            
            // Parse and format questions
            const questions = this.parseQuestions(response, questionType);
            
            console.log(`✅ Generated ${questions.length} questions`);
            return { success: true, questions };
            
        } catch (error) {
            console.error('❌ Question generation failed:', error);
            return { success: false, error: error.message };
        }
    }
    
    /**
     * Build prompt for Gemini
     */
    buildPrompt(topic, count, difficulty, type, classLevel, language) {
        const isBangla = language === 'bn';
        
        let prompt = '';
        
        if (type === 'mcq') {
            prompt = isBangla ? `
তুমি একজন বাংলাদেশের অভিজ্ঞ শিক্ষক। NCTB কারিকুলাম অনুযায়ী ${classLevel} শ্রেণীর জন্য "${topic}" বিষয়ে ${count}টি বহুনির্বাচনি প্রশ্ন (MCQ) তৈরি কর।

প্রতিটি প্রশ্নের জন্য:
- প্রশ্নটি স্পষ্ট এবং সংক্ষিপ্ত হতে হবে
- ৪টি অপশন থাকবে (ক, খ, গ, ঘ)
- সঠিক উত্তর নির্দেশ করতে হবে
- কঠিনতার স্তর: ${difficulty}
- প্রশ্নগুলো NCTB প্যাটার্ন follow করতে হবে

JSON format এ উত্তর দাও:
{
  "questions": [
    {
      "question": "প্রশ্ন এখানে",
      "options": ["ক) অপশন ১", "খ) অপশন ২", "গ) অপশন ৩", "ঘ) অপশন ৪"],
      "correctAnswer": "ক",
      "marks": 1
    }
  ]
}
` : `
You are an experienced teacher in Bangladesh. Create ${count} multiple choice questions (MCQ) for class ${classLevel} on the topic "${topic}" following NCTB curriculum.

For each question:
- Question should be clear and concise
- 4 options (A, B, C, D)
- Indicate correct answer
- Difficulty level: ${difficulty}
- Follow NCTB pattern

Respond in JSON format:
{
  "questions": [
    {
      "question": "Question text",
      "options": ["A) Option 1", "B) Option 2", "C) Option 3", "D) Option 4"],
      "correctAnswer": "A",
      "marks": 1
    }
  ]
}
`;
        }
        
        if (type === 'creative') {
            prompt = isBangla ? `
${classLevel} শ্রেণীর জন্য "${topic}" বিষয়ে ${count}টি সৃজনশীল প্রশ্ন তৈরি কর। NCTB প্যাটার্ন অনুযায়ী প্রতিটিতে থাকবে:
- উদ্দীপক
- ক) জ্ঞানমূলক প্রশ্ন (১ নম্বর)
- খ) অনুধাবনমূলক প্রশ্ন (২ নম্বর)
- গ) প্রয়োগমূলক প্রশ্ন (৩ নম্বর)
- ঘ) উচ্চতর দক্ষতামূলক প্রশ্ন (৪ নম্বর)

JSON format এ দাও।
` : `Create ${count} creative questions for class ${classLevel} on "${topic}" following NCTB pattern with stimulus and 4 sub-questions.`;
        }
        
        return prompt;
    }
    
    /**
     * Call Gemini API
     */
    async callGeminiAPI(prompt) {
        const url = `${this.baseURL}/models/${this.model}:generateContent?key=${this.apiKey}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048
                }
            })
        });
        
        if (!response.ok) {
            throw new Error(`API call failed: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extract text from response
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) {
            throw new Error('Empty response from AI');
        }
        
        // Update request count
        this.requestCount++;
        this.lastRequestTime = Date.now();
        
        return text;
    }
    
    /**
     * Parse questions from AI response
     */
    parseQuestions(responseText, type) {
        try {
            // Remove markdown code blocks if present
            let cleanText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            
            // Parse JSON
            const data = JSON.parse(cleanText);
            
            // Add metadata to each question
            const createdBy = window.auth?.currentUser?.email || 'anonymous';
            return data.questions.map((q, index) => ({
                ...q,
                id: `ai_${Date.now()}_${index}`,
                type: type,
                source: 'AI Generated',
                createdAt: new Date().toISOString(),
                createdBy
            }));
            
        } catch (error) {
            console.error('❌ Failed to parse questions:', error);
            // Fallback: try to extract questions manually
            return [];
        }
    }
    
    /**
     * Fix grammar using AI
     */
    async fixGrammar(text, language = 'bn') {
        const prompt = language === 'bn' 
            ? `নিচের বাংলা লেখায় ব্যাকরণগত ভুল সংশোধন কর এবং সংশোধিত টেক্সট দাও:\n\n${text}`
            : `Fix grammar in the following English text:\n\n${text}`;
        
        try {
            const response = await this.callGeminiAPI(prompt);
            return { success: true, text: response.trim() };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    
    /**
     * Translate text
     */
    async translate(text, from = 'bn', to = 'en') {
        const prompt = from === 'bn' 
            ? `Translate the following Bengali text to English:\n\n${text}`
            : `Translate the following English text to Bengali:\n\n${text}`;
        
        try {
            const response = await this.callGeminiAPI(prompt);
            return { success: true, translation: response.trim() };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    
    /**
     * Expand question (add more details)
     */
    async expandQuestion(question, language = 'bn') {
        const prompt = language === 'bn'
            ? `এই প্রশ্নটি আরও বিস্তারিত এবং চ্যালেঞ্জিং করে লেখ:\n\n${question}`
            : `Expand and make this question more detailed:\n\n${question}`;
        
        try {
            const response = await this.callGeminiAPI(prompt);
            return { success: true, expanded: response.trim() };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
    
    /**
     * Generate answer key for MCQs
     */
    async generateAnswerKey(questions) {
        const mcqQuestions = questions.filter(q => q.type === 'mcq');
        
        return mcqQuestions.map(q => ({
            question: q.question,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation || ''
        }));
    }
    
    /**
     * Check rate limit
     */
    checkRateLimit() {
        const now = Date.now();
        const timeDiff = now - this.lastRequestTime;
        
        // Reset counter if more than 1 minute has passed
        if (timeDiff > 60000) {
            this.requestCount = 0;
        }
        
        // Check limits
        if (this.requestCount >= CONFIG.RATE_LIMITS.REQUESTS_PER_MINUTE) {
            throw new Error('Rate limit exceeded. Please wait a minute.');
        }
        
        return true;
    }
    
    /**
     * Get remaining requests
     */
    getRemainingRequests() {
        return {
            perMinute: CONFIG.RATE_LIMITS.REQUESTS_PER_MINUTE - this.requestCount,
            perDay: CONFIG.RATE_LIMITS.REQUESTS_PER_DAY
        };
    }
}

// Create global instance
const geminiAI = new GeminiAPI();

// Export
window.geminiAI = geminiAI;

console.log('✅ Gemini AI Module loaded');
