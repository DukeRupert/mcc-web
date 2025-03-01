# Manifold Creator Collective Blog

A responsive Hugo-powered blog platform for the Manifold Creator Collective (MCC) - a community of TTRPG designers, writers, editors, and playtesters collaborating to elevate tabletop roleplaying games.

## 🌐 About

This repository contains the source code for the Manifold Creator Collective's official blog site at [manifoldcollective.com](https://manifoldcollective.com). The site serves as a platform for MCC members to showcase their latest creations, coordinate playtesting opportunities, provide specialized services, and share industry insights.

## 🛠️ Technology

- Built with [Hugo](https://gohugo.io/), a fast and modern static site generator
- Implements responsive design for optimal viewing across all devices
- Uses customized templates for TTRPG content presentation
- Optimized for speed and search engine visibility

## 🚀 Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (Extended version recommended)
- [Git](https://git-scm.com/downloads)

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/manifoldcollective/blog.git
   cd blog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the Hugo development server:
   ```
   hugo server -D
   ```

4. View the site at http://localhost:1313/

### Creating Content

To create a new blog post:

```
hugo new content/post/my-new-post.md
```

Edit the front matter and content of the new file. See the [Content Guidelines](#content-guidelines) section for more details.

## 📝 Content Guidelines

### Front Matter

All posts should include the following front matter:

```yaml
---
title: Welcome to the Draw Steel Content Forge!
description: Greetings, fellow adventurer! You've discovered the secret workshop where the tales and legends of Draw Steel come to life. This magical portal grants you the power to craft content that will appear on manifoldcollective.com – the digital tavern where Draw Steel enthusiasts gather.
date: 2025-02-28T21:24:00
author: tom-bombadil
image: /images/uploads/s-l-UM6vbyYfyJ0-unsplash.jpg
categories:
  - guide
tags:
  - post
  - intro
---
```

### Licensing

All content posted on the Manifold Creator Collective blog is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

This means:
- Content may be shared and adapted for non-commercial purposes
- Attribution must be given to the original author
- Derivative works must be shared under the same license

## 🤝 Contributing

Contributions to improve the site's functionality are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📦 Deployment

The site is automatically deployed via GitHub Actions whenever changes are pushed to the main branch.

## 📋 Site Structure

```
├── archetypes/        # Template files for new content
├── assets/            # Unprocessed assets (SCSS, JS, etc.)
├── config.toml        # Hugo configuration
├── content/           # Markdown content files
│   ├── posts/         # Blog posts
│   └── pages/         # Static pages
├── data/              # Site data files
├── layouts/           # HTML templates
├── static/            # Static files (images, CSS, JS)
└── themes/            # Site themes
```

## ⚙️ Configuration

Site configuration is managed through the `config.toml` file. See [Hugo Configuration](https://gohugo.io/getting-started/configuration/) for more details.

## 📄 License

- **Code**: This project is licensed under the [MIT License](LICENSE)
- **Content**: All blog content is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## 📞 Contact

For questions or support regarding this repository, please contact the MCC at [logan@fireflysoftware.com].
