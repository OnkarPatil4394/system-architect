

# Performance Optimizations and Minimalism Improvements

## 1. Remove Unused Dependencies and Code

- **Delete `src/App.css`** — it contains default Vite boilerplate styles (`.logo`, `.card`, `.read-the-docs`) that are never used
- **Delete `src/components/NavLink.tsx`** — a React Router NavLink wrapper that is never imported anywhere
- **Remove unused UI components** — the project imports 40+ shadcn/ui components (`sidebar`, `menubar`, `carousel`, `calendar`, etc.) but the portfolio only uses a handful. Unused ones add to bundle size during development

## 2. Optimize Google Fonts Loading

Currently, fonts are loaded via a CSS `@import url(...)` which is render-blocking. Switch to a `<link>` tag in `index.html` with `display=swap` and `preconnect` hints for faster first paint:

```text
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="fonts-url" rel="stylesheet">
```

This removes the CSS `@import` from `index.css` and moves font loading to the HTML head where it can start earlier.

## 3. Lazy Load Framer Motion for Below-the-Fold Sections

The `ScrollReveal` component wraps every section with framer-motion animations. For sections below the fold (About, Excellence, Experience, Contact), we can use `React.lazy` to defer loading these components until needed, reducing the initial JavaScript bundle.

## 4. Debounce Scroll Event Listeners

Three components (`Navbar`, `ScrollToTop`, `ScrollReveal`) attach scroll listeners. The `Navbar` and `ScrollToTop` listeners fire on every scroll event without throttling. Adding a simple throttle or using `requestAnimationFrame` will reduce layout thrashing on mobile devices.

## 5. Simplify the Typing Animation

The `useTypingEffect` hook in Hero creates a `setInterval` that calls `setState` on every character (70+ times). A CSS-only approach using `steps()` animation on `width` would eliminate all those re-renders while achieving the same visual effect.

## 6. Clean Up CSS Variables

Remove the sidebar-related CSS variables (`--sidebar-*`) from both light and dark themes in `index.css` since there is no sidebar in this portfolio. This reduces CSS file size and keeps the design system focused.

---

## Technical Summary of Changes

| File | Change |
|------|--------|
| `src/App.css` | Delete (unused boilerplate) |
| `src/components/NavLink.tsx` | Delete (unused component) |
| `index.html` | Add font preconnect and link tags |
| `src/index.css` | Remove `@import` for fonts, remove `--sidebar-*` variables |
| `src/components/Navbar.tsx` | Throttle scroll listener with `requestAnimationFrame` |
| `src/components/ScrollToTop.tsx` | Throttle scroll listener |
| `src/components/Hero.tsx` | Replace `useTypingEffect` with CSS `steps()` animation (optional, keeps JS fallback for language switching) |
| `src/pages/Index.tsx` | Lazy load below-fold sections with `React.lazy` + `Suspense` |

These changes focus on reducing bundle weight, eliminating dead code, and improving paint/interaction performance — all while keeping the current minimal design intact.
