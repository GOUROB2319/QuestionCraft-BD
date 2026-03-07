import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> Navigate to http://localhost:3000
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # -> Click the 'লগইন' (Login) link to open the login page.
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=/html/body/div[2]/header/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        
        # -> Fill the email and password fields and click the 'লগইন করুন' submit button to attempt login.
        frame = context.pages[-1]
        # Input text
        elem = frame.locator('xpath=/html/body/div[2]/div[2]/div[2]/form/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('gourobsaha2319@gmail.com')
        
        frame = context.pages[-1]
        # Input text
        elem = frame.locator('xpath=/html/body/div[2]/div[2]/div[2]/form/div[2]/div[2]/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('aaSS10#.')
        
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=/html/body/div[2]/div[2]/div[2]/form/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        
        # -> Click the 'নতুন প্রশ্নপত্র তৈরি করুন' (Create new paper) button to start creating a new paper.
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=/html/body/div[2]/div/div/main/div/section/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        
        # -> Input the subject name into the subject field (index 668) and click the 'পরবর্তী ধাপ' (Next step) button (index 725) to proceed to step 2 (question bank) so a question can be added.
        frame = context.pages[-1]
        # Input text
        elem = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[2]/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('বাংলা ২য় পত্র')
        
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=/html/body/div[2]/div/div/main/div/footer/div/div/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        
        # -> Fill the question textarea (index 851) with a sample question and click 'প্রশ্ন তালিকায় যোগ করুন' (index 862) to add it to the paper.
        frame = context.pages[-1]
        # Input text
        elem = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div/div/div[3]/div/textarea').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('রবীন্দ্রনাথ ঠাকুরের \'চিত্রা\' গল্পের প্রধান থিম কী? সংক্ষেপে ব্যাখ্যা করুন।')
        
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div/div/div[3]/div[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        
        # --> Assertions to verify final state
        frame = context.pages[-1]
        # Assert the question textarea contains the entered question
        elem = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[1]/div[1]/div[3]/div[1]/textarea').nth(0)
        value = await elem.input_value()
        assert "রবীন্দ্রনাথ ঠাকুরের 'চিত্রা' গল্পের প্রধান থিম কী? সংক্ষেপে ব্যাখ্যা করুন।" in value
        
        # Assert the notification 'প্রশ্ন যোগ করা হয়েছে।' is present
        notif = frame.locator('xpath=/html/body/section/ol/li').nth(0)
        notif_text = await notif.inner_text()
        assert "প্রশ্ন যোগ করা হয়েছে।" in notif_text
        
        # Assert the summary shows total questions (1)
        summary_el = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[2]/div[2]/div[1]/div[1]/div[1]').nth(0)
        summary_text = await summary_el.inner_text()
        assert "মোট প্রশ্ন" in summary_text and ("1" in summary_text or "১" in summary_text)
        
        # Assert total marks (/100) is shown
        marks_el = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/span').nth(0)
        marks_text = await marks_el.inner_text()
        assert "100" in marks_text
        
        # Assert class and exam metadata are set
        class_el = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[2]/div[2]/div[2]/div[1]/span[2]').nth(0)
        class_text = await class_el.inner_text()
        assert "Class 9" in class_text
        exam_el = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[2]/div[2]/div[2]/div[2]/span[2]').nth(0)
        exam_text = await exam_el.inner_text()
        assert "অর্ধবার্ষিক" in exam_text
        
        # Assert question type tag (MCQ) is present
        type_el = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[1]/div[2]/div[2]/div/div[2]/div/span[1]').nth(0)
        type_text = await type_el.inner_text()
        assert "MCQ" in type_text
        
        # Assert question list shows 1 item
        qcount_el = frame.locator('xpath=/html/body/div[2]/div/div/main/div/div[2]/div/div[1]/div[2]/div[2]/div/div[1]').nth(0)
        qcount_text = await qcount_el.inner_text()
        assert "1" in qcount_text
        
        # Ensure 'পরবর্তী ধাপ' (Next step) button is visible
        next_btn = frame.locator('xpath=/html/body/div[2]/div/div/main/div/footer/div/div/button[2]').nth(0)
        assert await next_btn.is_visible()
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    