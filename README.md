# Chris Lehnert Academic Website

This is a first draft static website for GitHub Pages.

## How to publish using GitHub Pages

1. Create a GitHub repository. A common name is `chris-lehnert.github.io` or `<your-github-username>.github.io`.
2. Upload all files from this folder into the repository root.
3. In GitHub, go to **Settings**, then **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.
7. GitHub will publish the site at `https://<your-github-username>.github.io/`.

## How to edit

The main page is `index.html`.
The visual style is in `assets/css/style.css`.

To add videos, upload your videos to YouTube or Vimeo, then replace a video placeholder with this:

```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
    title="Project video title"
    frameborder="0"
    allowfullscreen></iframe>
</div>
```

For an unlisted YouTube video, use the same embed format. Anyone with the page can view it, but it will not normally appear in public YouTube search.

## Suggested next edits

1. Add a professional headshot or lab hero image to `assets/images/`.
2. Replace the homepage video placeholder with a featured research video.
3. Add project videos to `media.html`.
4. Add individual project pages for the largest projects.
5. Add QUT profile, ORCID, LinkedIn and GitHub links to `contact.html`.
6. Review project wording for partner permissions and unpublished work.
