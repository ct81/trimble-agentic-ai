# assist-chat-react

Vite + React + TypeScript app that renders Trimble's `AgenticFullChat` component.

## Run
1. Get Artifactory access and create an Identity Token (Artifactory user profile).
2. `export ARTIFACTORY_TOKEN="<artifactory-identity-token>"`
   (PowerShell: `$env:ARTIFACTORY_TOKEN="<token>"`)
3. `cp .env.example .env.local` and set:
   - `VITE_AGENT_ID`: UUID of your agent from Agent Studio
   - `VITE_DEV_ACCESS_TOKEN`: a Trimble Identity access token (dev only)
4. `npm install`
5. `npm run dev` and open the printed URL.

## Swap the component
`AgenticFullChat` can be replaced with `AgenticMinimalChat` (single agent) or
`AgenticNarrowChat` (side panel) in `src/App.tsx`.

## Production
Implement `getAccessToken()` in `src/auth.ts` with your Trimble Identity login and remove
`VITE_DEV_ACCESS_TOKEN`. Never commit `.env.local` or any token.
Other `environment` and `theme` values: see the package's Web Frameworks docs.

## GitHub Actions
Add repo secret `ARTIFACTORY_TOKEN` and pass it as env to the `npm ci` step.

## GitHub: build and deploy to GitHub Pages
1. Repo Settings > Secrets and variables > Actions:
   - Secrets: add `ARTIFACTORY_TOKEN`
   - Variables: add `VITE_AGENT_ID`
2. Repo Settings > Pages > Source: choose "GitHub Actions".
3. Commit `package-lock.json` (run `npm install` locally once; `npm ci` needs it).
4. Push to `main`. Pull requests only build; pushes to `main` also deploy.
   The site URL appears in the deploy job and under Settings > Pages.

Notes
- Pages is a public static site. Do not put secrets in `VITE_` variables.
- `VITE_DEV_ACCESS_TOKEN` is not set in CI, so the deployed app needs real
  Trimble Identity sign-in implemented in `src/auth.ts`.
- GitHub Pages from a private repo requires a paid GitHub plan.
