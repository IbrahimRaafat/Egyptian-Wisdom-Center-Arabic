---
description: How to migrate a dynamic article to a static, manually editable Next.js page with original imagery
---

Follow these steps to convert an article from the JSON data store into a high-quality, static React page with localized styling and full image mapping from the original English source.

### 1. Identify Source Data
Locate the Arabic JSON content in `src/data/articles/[slug].json`. This contains the translated text that will form the body of the new page.

### 2. Research Original Imagery
Visit the original English article on `egyptianwisdomcenter.org` to identify the correct placement and high-resolution sources for all images.
- Document every image URL and its surrounding text context.
- Capture captions/alt text.

### 3. Initialize Static Page
Create a new directory and file at `src/app/articles/[slug]/page.tsx`. Use the standard Egyptian Wisdom Center template:

```tsx
import React from 'react';

export const metadata = {
    title: '[Arabic Title] - مركز الحكمة المصري',
    description: '[Arabic Description]',
};

export default function ArticlePage() {
    return (
        <article className="px-8 py-16 max-w-4xl mx-auto bg-white my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    [Title]
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose prose-p:mb-12 prose-p:mt-0 prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16">
                {/* Content goes here */}
            </div>
        </article>
    );
}
```

### 4. Fetch and Store Assets
Download all identified image assets into a local project folder:
`public/images/articles/[slug]/`

Use the following naming convention: `[descriptive-name].jpg`.

### 5. Format Content & Map Images
Inject the Arabic text into the `div.prose` container, applying these styling rules manually to ensure premium readability:

1.  **Headings:** Use `<h2 className="text-ewc-red font-bold">[Arabic Number]. [Title]</h2>`. Ensure numbers are standardized to Western Arabic digits (1, 2, 3...).
2.  **Paragraph Spacing:** Insert explicit `<br />` tags and physical empty lines between `<p>` blocks in the code to make editing easier.
3.  **Images:** Insert images in standard containers:
    ```tsx
    <div className="my-10">
        <img src="/images/articles/[slug]/[name].jpg" alt="[Description]" className="w-full h-auto rounded-lg shadow-md mb-4" />
        <p className="text-sm font-bold text-gray-600">[Caption]</p>
    </div>
    ```
4.  **Lists:** Standardize lists to use bullets for parents and dashes for sub-points if requested.

### 6. Verification & Cleanup
- Check `http://localhost:3000/articles/[slug]` to verify the layout.
- Delete the original JSON file in `src/data/articles/[slug].json` to ensure the static route takes precedence.
- Ensure all bold tags and special formatting from the original Word source are preserved.
