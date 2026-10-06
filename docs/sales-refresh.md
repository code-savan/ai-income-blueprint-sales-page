# Sales page alignment, 6 October 2026

## Scope and product evidence

The request is to update the existing sales page, preserve its UI, add strategic real app screenshots and improve loading. The authoritative product is code-savan/ai-income-blueprint at product commit 4eae0cdb2b5eb3bb8624895157b9b04d19f7d6fd. Its choices, guides, saved-work behavior and public preview were inspected. The user maintains the $97 one-time offer.

The existing Poppins/Sora typefaces, purple/white/dark palette, section order, cards, hero video player, forms and Whop checkout flow remain. No billing plan, access rule, refund condition, payment API or analytics destination was changed.

## Copy changes

- Replace the five-module/four-playbook/first-$500 timeline description with the actual written, interactive product.
- Explain six-question track selection, three-question offer interview, ten services, ten product ideas, ten connected playbooks, fifty action prompts, examples and saved next tasks.
- Show all ten playbook titles and concrete actions. Explain that examples adapt to the chosen work.
- Describe five research channels and optional Manus/Z.ai research accurately.
- Explain product research as starting evidence, not proven demand. Explain free-tool paths and separate third-party costs.
- Remove expired countdowns, conflicting $147/$197 reference prices and unsupported $578 value arithmetic from active sales components. Show one $97 price and an actual inclusion list.
- Match FAQs, metadata, structured product data, purchase-email instructions and thank-you copy to the current product. The email template was edited, no email was sent.
- Describe the free 77-page PDF as 300 prompts across ten task categories, including thirty UGC prompts. It is separate from the paid fifty-prompt action pack. Render the existing PDF cover rather than showing the old UGC-only cover.

## Screenshots

Real app screenshots are in public/peek/2026-10. Four were captured during this sales-page task. The next-task screen was captured during the same day's verified product release, with the same current interface. Only test/demo identity and practice content are shown. No credentials, private email or financial data were included. Member data and selected track/offer were not changed to prepare these images.

- offer-choice: the three-question offer interview and product choices.
- next-task: selected service, change controls, next unfinished task and sidebar.
- client-research: exact Instagram steps and the other channels.
- product-example: job-tracker scope, starter worksheets and build checks.
- action-prompts: searchable/filterable fifty-prompt pack.

Images retain native 1348 × 926 resolution, encoded as quality-90 WebP. Total original WebP bytes for those five images: 360,802. They display without the previous enlargement/cropping transform. Each opens its full-size image. The gallery has Previous/Next buttons, swipe and a usable scrollbar. The public product preview is linked independently.

## Loading changes

- Use responsive Next Image for app screenshots, PDF cover, tool marks and hero poster, with reserved dimensions and lazy loading below the fold.
- Serve a 19,972-byte local WebP hero poster instead of the 130 KB remote JPEG. Keep the same poster art and original video URL.
- Extract small posters from the eight existing demo clips. Do not request their video sources until visible. Pause off-screen playback and respect reduced motion.
- Defer the spotlight video source until its section is visible and pause off-screen playback.
- Render hero content immediately rather than waiting for reveal animation.
- Load Latin font CSS for the existing font families and weights.
- Use new asset paths so previously immutable cached screenshots cannot mask the new release.

These are concrete resource/loading changes, not a claimed Lighthouse-score improvement. Field performance depends on device, connection and hosting. Existing recorded video narration was not rewritten or regenerated. The full legacy reference PDF content was not revised as part of the sales-page alignment.

## Verification

- Production build, including TypeScript and Next lint: passed. Two existing no-img-element warnings remain in unrelated TestimonialCard and ThankYouVSL components.
- Frontend premium strict static audit: zero findings. This is a marketing page, not an application-contract migration.
- git diff --check: passed.
- Browser release checks and deployment evidence are recorded below after deployment.

## Live browser evidence

Vercel deployment e87a6f6d8ce20878caf44df230d317c09efc2125 succeeded. The custom domain served the new headline, ten-guide contents, updated tool names and revised pricing. The initial live DOM showed nine background videos with preload=none and no source URL. Browsing the gallery loaded all five screenshots. A full-size image opened in its own tab at native resolution. The inclusion FAQ expanded and reported aria-expanded=true. The existing checkout modal opened, focused the name field and closed with Escape. No purchase or external form submission was performed.

The final polish adds exact intrinsic image dimensions, unclipped FAQ answers, logical guide heading levels, main semantics and checkout-dialog keyboard containment/focus restoration. All payment endpoints, SDK configuration and plan IDs remain unchanged. Narrow-screen rules were inspected in the existing CSS. No physical-phone or measured Lighthouse test was performed.
