![Hugo Theme Prism](https://github.com/user-attachments/assets/b30a1ad0-c135-49f3-a34b-a9d1181ba117)

# Hugo Theme Prism

Prism is a modern and vibrant Hugo theme designed for personal blogs and portfolios. It features a stunning design with a focus on visual aesthetics and user experience.

## Quick Start

Use this starter template to try the theme right in GitHub Codespaces (no need to install Hugo locally).

<a href="https://github.com/CaiJimmy/hugo-theme-prism-starter">
  <img src="https://img.shields.io/badge/use%20this-template-blue?logo=github">
</a>

## Features

- **Dark Mode Support**: Automatically adapts to system preferences for a comfortable reading experience in any lighting.
- **Built-in Search**: Fast, client-side search functionality.
- **Internationalization (i18n)**: Native support for multiple languages.
- **Responsive Design**: Looks great on mobile, tablet, and desktop devices.
- **Table of Contents**: An elegant, collapsible table of contents for long-form content.
- **Archive Layout**: Dedicated layout for browsing posts by year.

## Home Layout

The home layout can be configured to show the latest post in the hero section, or independently. This is done by modifying the front matter of the `_index.md` file in the `content` directory, setting `featureFirstArticle` to `true` or `false`.

| `featureFirstArticle = true` | `featureFirstArticle = false` |
| --- | --- |
| ![Feature First Article](https://github.com/user-attachments/assets/22bac54b-a206-4cac-849a-7e8923a5e68a) | ![No Feature First Article](https://github.com/user-attachments/assets/d4cb7085-658d-4116-a14d-6759a1b6c7a8) |

Also, the home layout can be configured to show a single page, like an about page, by setting `singlePage = true` in the front matter of the `_index.md` file.

![Single Page](https://github.com/user-attachments/assets/6929db02-f3dc-47ee-bbdb-11adc3fcadef)

## Cover Image

Prism features two different cover image layouts, which can be toggled by setting `hero.blurry` to `true` or `false` in the page front matter.

- `hero.blurry = true`: Cover image will blend with navbar and body background.
- `hero.blurry = false`: Cover image will be displayed as a normal picture.

| `hero.blurry = true` | `hero.blurry = false` |
| --- | --- |
| ![Blurry = True](https://github.com/user-attachments/assets/18096775-2619-4bd5-af2b-39965489bc41) | ![Blurry = False](https://github.com/user-attachments/assets/e27ba5c4-5e35-45ad-9881-0cae59e97028) |

## Vibrant

Prism can extract the color from the cover image and apply it to different elements of the theme. This is done by setting `hero.vibrant` to `true` or `false` in the page front matter.

| `hero.vibrant = true` | `hero.vibrant = false` |
| --- | --- |
| ![Vibrant Enabled](https://github.com/user-attachments/assets/b01d644f-4aa9-4456-ace8-af62192cf58d) | ![Vibrant Disabled](https://github.com/user-attachments/assets/19127d26-bf68-407f-b0d1-ea72fa47a855) |

## Installation

### As a Hugo Module (Recommended)

To install Prism as a Hugo Module, run the following command in your project root:

```bash
hugo mod init github.com/your-username/your-site
hugo mod get github.com/CaiJimmy/hugo-theme-prism
```

Then add the module to your `hugo.toml` (or `config.toml`):

```toml
[module]
  [[module.imports]]
    path = "github.com/CaiJimmy/hugo-theme-prism"
```

### As a Git Submodule

If you prefer using git submodules:

```bash
git submodule add https://github.com/CaiJimmy/hugo-theme-prism.git themes/prism
```

Then update your configuration:

```toml
theme = 'prism'
```

## Configuration

You can set theme-specific parameters in your `params.toml` file (or under `[params]` in `hugo.toml`).

Here is an example configuration based on the demo site:

```toml
[params]
  siteNamePostfix = "/"
  mainSections = ["post"] # Sections to include in the main feed
  rssFullContent = true   # Include full content in RSS feeds
  Logo = "path/to/your/logo.png"

  # Default Hero Configuration (overrideable by each page)
  [params.Default.Hero]
    Blurry = true   # Enable blurry background effect
    Vibrant = true  # Enable vibrant color overlays

  # Footer Configuration
  [params.footer]
    since = 2026    # Start year for copyright notice

  # OpenGraph / Twitter Card Settings
  [params.opengraph.twitter]
    site = "@YourHandle"
    card = "summary_large_image"
```

## Copyright

Licensed under the GNU General Public License v3.0

Please do not remove the "Theme Prism designed by Jimmy" text and link.

If you want to port this theme to another blogging platform, please let me know🙏.
