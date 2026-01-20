
import { request, FullConfig } from '@playwright/test';

export default async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use?.baseURL as string;
  const api = await request.newContext();

  const deadline = Date.now() + 2 * 60_000; // 2 minutes

  while (Date.now() < deadline) {
    try {
      const res = await api.get(baseURL);

      if (res.status() < 500 && res.status() !== 404) {
        await api.dispose();
        return;
      }
    } catch {
      // ignore
    }

    await new Promise(r => setTimeout(r, 3000));
  }

  await api.dispose();
  throw new Error(`Preview URL did not become ready: ${baseURL}`);
}
