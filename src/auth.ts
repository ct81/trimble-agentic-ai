// Returns a Trimble Identity access token for the chat component.
//
// DEV: reads VITE_DEV_ACCESS_TOKEN from .env.local so you can test quickly.
//      That value is bundled into the browser, so do not ship it.
// PROD: replace the body with your real Trimble Identity sign-in flow and
//       return a fresh access token each time it is called.
export async function getAccessToken(): Promise<string> {
  const token = import.meta.env.VITE_DEV_ACCESS_TOKEN as string | undefined;
  if (!token) {
    throw new Error(
      "No access token. Set VITE_DEV_ACCESS_TOKEN in .env.local for dev, or implement getAccessToken() with your Trimble Identity login."
    );
  }
  return token;
}
