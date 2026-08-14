# Northstar Login Hub

# Prompt: Northstar Retail Co. — Login Page (HTML/CSS/JS)

Build a single-page login experience for the **Northstar Retail Support Deflection MVP** using plain HTML, CSS, and vanilla JavaScript (no frameworks, no build tools). It must be a self-contained file (or 3 linked files: index.html, styles.css, script.js) that runs directly in a browser.

## 1. Logo Splash (before login)

- On page load, show a full-screen splash/intro overlay on the dark background (`#0B0F17`) displaying the Northstar Retail Co. logo (navy background, gold "N/S" monogram with compass star, "NORTHSTAR RETAIL CO." wordmark).

- Logo fades/scales in, holds for ~1.5–2 seconds, then transitions (fade or slide) into the login card.

- Use a CSS keyframe animation (opacity + slight scale) — no external animation libraries.

- Include a "Skip" tap/click-anywhere option so it's not annoying on repeat visits.

## 2. Login Card

- Centered card, `max-width: 400px`, background `#161C27` (Surface Dark), rounded corners (~12px), subtle shadow.

- Contents, top to bottom:

  1. Small Northstar logo/wordmark at top of card

  2. "Welcome Back" heading (Text Primary `#F9FAFB`, bold/semibold)

  3. Subtitle: "Log in to track orders, manage returns, and get support." (Text Muted `#9CA3AF`)

  4. **Email field** — label + input, background `#1F2633`, border same tone, text `#F9FAFB`, placeholder in muted gray

  5. **Password field** — same styling, with a show/hide password toggle (eye icon, Lucide or FontAwesome)

  6. "Forgot password?" link, right-aligned under password field, Primary Accent `#2563EB`

  7. Full-width primary CTA button: "Log In" — background `#2563EB`, hover state slightly darker/lighter, disabled state while validating

  8. Divider with "or" (optional, only if adding social buttons — otherwise skip)

  9. "Don't have an account? **Sign Up**" link at the bottom — clicking it toggles/reveals a **Sign Up form** (same card, swap fields: Name, Email, Password, Confirm Password, Create Account button) without navigating to a new page — use a smooth toggle animation between the two states

  10. Small footer text: "© 2026 Northstar Retail Co." in muted gray

## 3. Functionality Requirements

- **Client-side validation**: required fields, valid email format (regex), password minimum length (8 chars), confirm-password match on sign-up.

- **Inline error messages** under each field (red-ish tone that still fits the dark palette, e.g. `#F87171`), shown on blur or submit attempt.

- **Success state**: on valid submit, simulate authentication (no real backend needed) — show a loading spinner on the button for ~1s, then either redirect to `dashboard.html` (placeholder link) or show a success toast/message.

- **Show/hide password** toggle must actually switch input type between `password` and `text`.

- **Sign up / Log in toggle** must be fully working with JS (no page reload), preserving the same card container.

- Store nothing sensitive — this is a front-end mock; use `localStorage` only if needed to simulate a "logged in" state for the MVP demo, and clearly comment that in the code.

- Fully keyboard-accessible (tab order, Enter submits, focus states visible with a subtle blue outline).

## 4. Styling — Use These Exact Design Tokens

```css

:root {

  --bg-dark: #0B0F17;

  --surface-dark: #161C27;

  --border-dark: #1F2633;

  --primary-blue: #2563EB;

  --success-green: #16A34A;

  --error-red: #F87171;

  --text-main: #F9FAFB;

  --text-muted: #9CA3AF;

  --font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

}

```

- Font: Inter (load via Google Fonts CDN or system fallback stack above).

- Headings: 600–700 weight. Body/buttons: 400–500 weight. Labels/metadata: 400 weight, 12–14px.

- Icons: Lucide Icons or FontAwesome 6 Free via CDN (use for email, lock, eye/eye-off icons).

## 5. Responsive Behavior

- Desktop-first, but must degrade gracefully below 768px: card goes full-width with side padding (~16–24px), splash logo scales down proportionally.

## 6. Deliverable

Output complete, working code (HTML/CSS/JS) with clear comments marking where a real backend/API call would eventually replace the mock authentication logic — so the next teammate can wire it up to the actual auth system without guessing.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://northstar-auth-flow.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cced6551-89bd-4d00-b093-d504ad3233fd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
