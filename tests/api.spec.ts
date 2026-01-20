
import { test, expect } from '@playwright/test';

test('API responds correctly', async ({ request, baseURL }) => {
  const res = await request.get(`${baseURL}/api/helloworld`);
  expect(res.status()).toBe(200);

  const data = await res.text();
  expect(data).toContain('Welcome to Azure Functions! Your function executed successfully.');
});