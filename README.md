# Chris Lehnert - academic website

A static academic portfolio for GitHub Pages. This revision develops the original seven-page site into a connected research portfolio, without a framework, package manager or required build step.

## Preview

Open `index.html` in a modern browser. Alternatively run `python -m http.server 8000` in this directory. The site is designed for the existing GitHub Pages project subdirectory as well as a custom domain; all local links are relative.

## Structure

- Existing routes retained: `index.html`, `research.html`, `projects.html`, `publications.html`, `media.html`, `teaching.html`, `contact.html`.
- Eleven `project-*.html` pages connect research challenges, scope, sources and selected publications.
- `credits.html` documents research attribution, the photograph and video privacy.
- `assets/css/style.css` is the shared responsive design.
- `assets/js/site.js` adds optional mobile navigation, project filters, publication search and click-to-load YouTube. Research content remains in the HTML and is available without JavaScript.
- `assets/images/vertical-farm.avif` is the author-supplied QUT facility photograph; other project covers are decorative CSS treatments, not claimed research figures.

## Deployment

This is a review revision. Publishing requires merging it into the branch configured in GitHub Pages. Do not assume that creating a pull request changes the live website. Preserve any existing Pages/custom-domain settings. The empty `.nojekyll` file supports direct static hosting.

## Maintenance

Edit the relevant HTML file directly. Keep shared navigation and footer changes consistent across pages. Selected publications occur on `publications.html`, related project pages and, for three featured records, `index.html`; update all copies when metadata changes. Search keywords live in the `data-search` attributes. Project categories live in `data-category`.

The YouTube playlist ID is `PLGXJRvdnpz1JTOfU5RbHtAUjgt0UyZORl`. The player does not contact YouTube before the visitor selects Load. Its `youtube-nocookie.com` domain is privacy-enhanced, not a promise of zero data transmission. No videos autoplay. This implementation does not connect to a private YouTube account or enumerate playlist entries. Individual video-to-project matches still require checking the actual playlist contents.

## Content review (8 September 2026)

Primary sources checked include QUT's academic profile, the linked arXiv manuscripts, IEEE's 2024 shape-completion record, the Lamarr Institute, and Future Food Systems. The project context also draws on the author's website brief. This is a selected research review, not a complete publication audit.

- RICE: link and date refer to the June 2025 arXiv preprint. The author-supplied record identifies ICRA 2026; final proceedings metadata should be reconciled before changing the publication label. The current site does not claim universal plant safety or complete harvesting performance.
- Mobile base control: the linked record is the September 2023 manuscript. Check final journal metadata before replacing that citation with the later publication.
- Acoustic feedback for grinding: the arXiv record explicitly states acceptance at ICRA 2026.
- Banana dehanding: Future Food Systems lists P2-022 as completed in May 2026. Follow-on development is distinct; no commercial-deployment success, new funding award or partner cash commitment is asserted.
- AgriVLA, greenhouse UV/image work, and future interaction-learning work are described as development directions, not released datasets/models, proven disease-treatment efficacy or completed funded programmes.
- No confidential grant budgets, staffing plans, proposed work packages or unpublished performance results are included.
- Old citation, publication-count and funding statistics were removed rather than treated as live metrics.
- The tree-crop and poultry streams remain brief author-described application areas until stronger public project material is available.

## Validation

Nineteen HTML pages were rendered in Chromium at 1440 px and 390 px using an inline-asset test harness because this environment blocks browser navigation to local servers and file URLs. Local links and fragments were separately checked. Project filters, publication search, empty results, mobile-menu Escape behaviour and no-JavaScript content/navigation were exercised. No horizontal overflow, missing images or JavaScript page errors were detected in that test.

The YouTube iframe creation was tested with a network stub; actual video playback and live GitHub Pages deployment were not verified. External source retrieval is not a guarantee that every external URL will always resolve. Review on the final deployed origin before public launch.
