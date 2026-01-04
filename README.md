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