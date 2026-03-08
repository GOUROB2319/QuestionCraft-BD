/**
 * GeminiService: Wrapper for Google Gemini API to generate questions.
 */

const GeminiService = {
    apiKey: CONFIG.GEMINI_API_KEY,
    model: CONFIG.GEMINI_MODEL,
    apiVersion: 'v1', // Switched to v1 for better availability

    getApiUrl(model) {
        return `https://generativelanguage.googleapis.com/${this.apiVersion}/models/${model || this.model}:generateContent?key=${this.apiKey}`;
    },

    /**
     * Generates questions based on provided parameters.
     * @param {Object} params - { class, subject, chapter, topic, type, count, difficulty }
     * @returns {Promise<Object>} - The generated questions in structured format.
     */
    async generateQuestions(params) {
        const prompt = this.buildPrompt(params);
        let currentModel = this.model;

        try {
            return await this.callApi(currentModel, prompt);
        } catch (error) {
            console.warn(`Model ${currentModel} failed, trying fallback...`, error);
            // Fallback to gemini-pro if flash fails
            if (currentModel !== 'gemini-pro') {
                return await this.callApi('gemini-pro', prompt);
            }
            throw error;
        }
    },

    async callApi(model, prompt) {
        const url = this.getApiUrl(model);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                    maxOutputTokens: 2048,
                    // responseMimeType: "application/json" // Removed for v1 compatibility
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Gemini API error');
        }

        const data = await response.json();
        const textContent = data.candidates[0].content.parts[0].text;

        // Robust JSON extraction
        try {
            // Find JSON block if it's wrapped in markdown code blocks
            const jsonMatch = textContent.match(/```json?\n?([\s\S]*?)\n?```/) || [null, textContent];
            const cleanJson = jsonMatch[1].trim();
            return JSON.parse(cleanJson);
        } catch (e) {
            console.error('JSON Parse Error:', e, textContent);
            throw new Error('Failed to parse AI response as JSON');
        }
    },

    /**
     * Builds a structured prompt for the Gemini AI.
     */
    buildPrompt(params) {
        return `
            You are an expert educator in Bangladesh, specializing in the NCTB curriculum for ${params.subject}.
            Generate ${params.count} ${params.type} questions for Class ${params.class}, Chapter: ${params.chapter}, Topic: ${params.topic}.
            Difficulty Level: ${params.difficulty}.

            Return the output strictly in JSON format according to the following structure:
            {
                "questions": [
                    {
                        "id": "unique-id",
                        "type": "${params.type}",
                        "questionText": "...",
                        "options": ["...", "...", "...", "..."], // Only for MCQ
                        "correctAnswer": "...",
                        "explanation": "...",
                        "marks": 5
                    }
                ]
            }

            Ensure the language is Bengali (Bengali font). Follow the standard formatting and style of NCTB textbooks.
            For Creative Questions (CQ), provide the stimulus (উদ্দীপক) and then parts (ক, খ, গ, ঘ).
        `;
    }
};

window.geminiService = GeminiService;
