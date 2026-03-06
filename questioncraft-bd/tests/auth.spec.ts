import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
    test('should navigate to login page from landing', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        // Use href selector for robustness
        const loginLink = page.locator('header a[href="/login"]').first();
        await expect(loginLink).toBeVisible({ timeout: 15000 });
        await loginLink.click();
        await expect(page).toHaveURL(/.*login/, { timeout: 15000 });
    });

    test('should show registration form correctly', async ({ page }) => {
        await page.goto('/register', { waitUntil: 'domcontentloaded' });
        // Use name based selectors
        await expect(page.locator('input[name="fullName"]')).toBeVisible({ timeout: 15000 });
        await expect(page.locator('input[name="email"]')).toBeVisible({ timeout: 15000 });
    });
});
