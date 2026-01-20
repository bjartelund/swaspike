
// tests/smoke.spec.ts
import { test, expect } from '@playwright/test';

test('Home page loads', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);

  // Check that Next.js root element is present
  await expect(page.locator('#__next')).toBeVisible();
});
