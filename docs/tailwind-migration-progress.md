# Tailwind CSS v4 Migration Progress

## Migration strategy

Migrate incrementally while keeping the exported Ahrefs stylesheets loaded as a fallback. No legacy stylesheet has been deleted or disabled. The Tailwind entry point remains `app/globals.css`; a second Tailwind entry would duplicate the pipeline rather than convert more styles.

## Routing and shared chrome

The routes already exist:

- `/` uses `app/(marketing)/page.tsx`.
- `/pricing` uses `app/(marketing)/pricing/page.tsx`.
- `/site-explorer` uses `app/(tools)/site-explorer/page.tsx`.
- `/blog` uses `app/blog/page.tsx`.
- Blog articles, including BLUF, use the dynamic `app/blog/[slug]/page.tsx` route and `content/blog/article-page`.

Page templates use `components/chrome/GlobalChrome.tsx` for global navigation and footer selection. The same `HomeNavigation` component now renders on every route, including Blog list and articles; route-specific navigation is no longer selected. Footer implementations remain route-specific while Blog list and article share the same footer. Legacy navigation implementations remain in feature chrome files but are not rendered by the templates.

The Ahrefs font is registered as the Tailwind theme token `--font-ahrefs` and applied as the global body font. The exported stylesheet set includes an unlayered `body` rule with an undefined font variable, so the base declaration is marked important to ensure affected page banners and footer links inherit Ahrefs instead of browser-default Times New Roman.

Browser verification after this update confirmed the shared navigation and Ahrefs font on `/blog`, `/blog/bluf`, and `/pricing`. The browser connection dropped while checking `/site-explorer`, so that route was not rechecked after the update. No build/dev command or screenshot comparison was run.

### Component-by-component progress

| Component | Status | Measured progress | Still using exported CSS |
|---|---|---|---|
| Global navigation root (`HomeNavigation`) | In progress | Replaced `display:flex` and `position:relative` with Tailwind utilities (2 root selector rules); checked computed layout at 375, 768, 1024, 1280, and 1440px | The Blog DOM has 246 unique `css-*` classes and 403 matching exported rules across the header subtree; menus, links, banner and responsive states are not migrated |
| Letaido top banner | Not started | — | Banner markup/style classes remain exported CSS |
| Marketing/blog navigation menu contents | Not started | — | Product/resources dropdowns, buttons, logo and mobile panel remain exported CSS |
| Footer | Not started | — | Blog DOM has 140 unique `css-*` classes and 289 matching exported rules in footer subtree |
| Homepage sections | Inline-style pass complete | 2,419 inline-style calls and 25,702 declarations were converted across homepage source/chrome | Exported component class selectors remain; this is not a full CSS migration |
| Blog list/article content | Inline-style pass complete | 1,472 inline-style calls and 13,261 declarations were converted in the prior measured pass | Exported component class selectors remain; recovered static markup is also still styled by legacy CSS |
| Pricing and Site Explorer content | Inline-style pass complete | 1,819 inline-style calls and 17,440 declarations were converted in the prior measured pass | Exported component class selectors remain |

DOM rule counts above were collected from `/blog` at 1440px and count CSS rule selectors referencing a `css-*` class present in each subtree; they are a current component scope measurement, not counts of rules already migrated. The shared global navigation is also the header on Blog routes; the old Blog-specific navigation components are not rendered by the templates.

The first navigation slice changed in `features/home/components/PageChrome.tsx`. Keep the remaining root classes and descendant rules until each responsive, hover, dropdown, and mobile-menu state is migrated and checked individually.

### Standard CSS progress: normalize.css

The 35 rule blocks from `normalize.css` v8.0.1 have been moved verbatim in behavior to Tailwind's `@layer base` in `app/globals.css`. Its stylesheet link was removed from `app/layout.tsx`; the original file remains in `public` as a preserved source copy. The global reset selectors, legacy form-control normalization, and browser pseudo-elements need selector-level rules and cannot be applied reliably using per-element utility classes. This is a documented base-layer exception, not a new standalone stylesheet.

The running browser confirmed the normalize stylesheet is no longer linked, while the global Ahrefs font and body margin remain applied. No cross-browser or screenshot comparison has been performed.

### Standard CSS progress: universal document defaults

The global `html` and `body` defaults from the exported universal stylesheet have been mapped to `@layer base` in `app/globals.css`: document height and smooth scrolling, body minimum height, 16px font size, 18.4px line height, touch scrolling, and antialiased font rendering. The English body font override is scoped to `html[lang="en"]` so it does not suppress the exported Japanese/Korean font rules. The 16px and 18.4px values match computed styles at the checked 375px and 1440px viewports.

The `--color-link: #3A57FC` variable is also registered as a static Tailwind theme color so existing exported rules and Tailwind utilities can share the same token. The exported universal stylesheet remains loaded; this is a parallel Tailwind equivalent, not removal of its source rule. Browser spot checks at 375px and 1440px confirmed the body font, size, line-height, minimum height, html height, and smooth scrolling remain applied. No screenshot comparison was performed.

## Route recovery

The original main content for Pricing, Site Explorer, Blog list, and the BLUF article was recovered from the local offline export under `C:\Users\a\Downloads\ahrefs_offline (1)\ahrefs_offline\ahrefs.com`. The four main fragments are now stored under `public/page-snapshots/` and rendered by `components/content/OfflineExportedMain.tsx`. Their text, markup, inline variables, and Ahrefs class names are kept from the export; existing global navigation/footer and CSS links remain in use. Relative media references are normalized to local public URLs, and the referenced local assets were copied into `public`.

The 26 recursive section stubs that caused `Maximum call stack size exceeded` were removed after their routes were switched to the recovered original markup. The app code remains routed through the existing App Router pages.

The recovered main fragments are static exported markup. They restore the original content and stop the server recursion, but interactions that depended on Ahrefs client-side JavaScript are not reintroduced. Browser smoke checks are recorded below; screenshot comparison and interaction validation remain outstanding.

### Browser check

The already-running local app was checked in a browser (no build/dev command was run). `/pricing`, `/site-explorer`, `/blog`, and `/blog/bluf` each returned the expected page title, one `<main>`, and the expected page heading. Missing BLUF article image files found during the check were copied from the local offline export into `public`.

One responsive asset remains unavailable in the supplied export: `/site-explorer` selects `/assets/esbuild/analyze-mobile-2D7MGVBQ.svg` at the browser's current width, but that file is absent from both the app and offline export. The desktop variant exists and was copied; the missing mobile variant is not replaced with a potentially different graphic. Therefore this route still has a broken image at that breakpoint.

No before/after screenshots were compared, and the recovered HTML is not functionally equivalent to the original client-rendered pages. Do not treat these checks as pixel-perfect or full interaction verification.

## Measured progress

| Route group | Inline style calls | Calls converted | Declarations converted |
|---|---:|---:|---:|
| Homepage sections and page chrome | 2,419 | 2,419 | 25,702 |
| Blog list and navigation | 733 | 733 | 6,614 |
| Single blog article and navigation | 739 | 739 | 6,647 |
| Pricing page and navigation | 889 | 889 | 8,572 |
| Site Explorer page and navigation | 930 | 930 | 8,868 |
| **Total** | **5,710** | **5,710** | **56,403** |

All known `parseInlineStyle` call sites are converted to Tailwind arbitrary-property utilities. The helper and 26 stale imports were removed. The shared mobile navigation's conditional layout styles were also moved from a React style object to Tailwind utilities.

There are 24 page/section source files whose style calls were converted (16 Homepage files and 8 route-specific files). Relative asset URLs in converted utilities were normalized to `/assets/esbuild/...` paths: 73 in the Homepage conversion and 52 in the remaining route groups.

## Stylesheets and exported selectors

| Metric | Baseline | Converted/removed | Remaining |
|---|---:|---:|---:|
| CSS files in project (including Tailwind entry) | 5 | 0 | 5 |
| Exported Ahrefs CSS rule blocks | ~11,155 | 0 | ~11,155 |
| Legacy stylesheet links | 4 | 1 | 3 |
| normalize.css rule blocks moved to Tailwind base | 35 | 35 | 0 active in external stylesheet |
| Universal document selector families mirrored in Tailwind base | 2 | 2 | 0 selector families not mapped |
| Additional universal document declarations mirrored | 7 | 7 | 0 declarations not mapped in these rules |
| Exported theme variables registered in Tailwind | 1 | 1 | 0 for `--color-link` |

The exported Ahrefs classes and rules are still present and still loaded. The current Tailwind utilities preserve the declarations originally supplied through inline custom properties; they do **not** replace every `css-*` selector in the Ahrefs stylesheets. Therefore the project is not yet independent of exported Ahrefs CSS. The universal document rules have Tailwind equivalents but remain present in their source stylesheet. `normalize.css` is no longer loaded, but its source file is intentionally retained.

## Included UI areas

- Shared desktop/mobile navigation and page chrome on Homepage, Blog, Pricing, and Site Explorer.
- Homepage sections and footer page chrome.
- Blog listing page sections and footer page chrome.
- Single blog article sections and footer page chrome.
- Pricing page and pricing sections.
- Site Explorer page sections.

## Verification still required

- Resolve the old relative `academy-U4PYLFEQ.svg` candidate reported by the running Next.js CSS compiler. Source now uses the root-relative asset path; the error may be from stale `.next` output.
- Recheck browser rendering for `/`, `/blog`, `/blog/bluf`, `/pricing`, and `/site-explorer`, then compare matching desktop, tablet, and mobile screenshots and interactive states.
- Inspect the remaining exported selectors and map them to Tailwind incrementally. Keep all legacy stylesheets until each selector consumer has an equivalent replacement and visual verification.
- Reassess CSS file and stylesheet-link removal only after selector coverage is complete.

No build, dev-server, lint, or type-check command has been run, per the user's instruction to handle command-line validation outside VS Code. Pixel-perfect equivalence and runtime correctness are not yet claimed.
