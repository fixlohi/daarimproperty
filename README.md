# Daarim Property — Static Website

A static recreation of [daarimproperty.co.uk](https://daarimproperty.co.uk). Plain HTML, CSS and a small JS file. No build step required.

## Local preview

Just double-click `index.html`, or run a tiny server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy free on GitHub Pages

1. Create a new **public** repository on GitHub, e.g. `daarim-property`.
2. Upload **all files in this folder** (including the `assets/` folder and the hidden `.nojekyll` file) to the repo root. The easiest way is the GitHub web UI: open the repo → "Add file" → "Upload files" → drag the folder contents in → "Commit changes".
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and **Folder** to `/ (root)`. Click **Save**.
6. Wait ~1 minute. Your site is live at:
   `https://<your-github-username>.github.io/<repo-name>/`

### Use your own domain (daarimproperty.co.uk)

1. In the repo root, create a file named **`CNAME`** containing a single line:
   ```
   daarimproperty.co.uk
   ```
2. At your domain registrar's DNS panel, add these records:
   - `A` records for the apex domain (`@`) pointing to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` pointing to `<your-username>.github.io`
3. In **Settings → Pages → Custom domain**, enter `daarimproperty.co.uk` and tick **Enforce HTTPS** once it's available (a few minutes after DNS propagates).

## Editing content

Open `index.html` in any text editor — every section is clearly commented and the copy lives directly inside it. To swap an image, drop a replacement of the same name into `assets/`.

## Contact form

The form opens the visitor's email client pre-filled with their message (a `mailto:` link). To accept submissions without a backend, sign up for a free service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) and replace the `<form>` action — both take 5 minutes to wire up.
