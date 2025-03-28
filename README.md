# The Manifold Creator Collective

![Manifold Collective Logo](https://manifoldcollective.com/logo/MANIFOLD_LIGHT.png)

## About The Manifold

The Manifold Creator Collective (MCC) unites passionate TTRPG designers developing content for Draw Steel and diverse tabletop roleplaying games. Our community showcases original creations, facilitates playtesting, offers professional design services, and shares expert resources. From established designers to newcomers, MCC provides tools, collaboration opportunities, and industry connections to advance your TTRPG projects. Join The Manifold and shape the future of tabletop gaming through our collaborative design community.

## Project Overview

This repository contains the code for The Manifold's web platform - a responsive blog and community hub built with modern web technologies to support TTRPG creators.

## Technologies Used

- **Frontend Framework**: Sveltekit
- **CSS Framework**: TailwindCSS with Flowbite components
- **Backend**: NodeJS
- **CMS**: Directus

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) for package management

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-organization/manifold-collective.git
   cd manifold-collective
   ```

2. Install dependencies
   ```bash
   pnpm i
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   PUBLIC_DIRECTUS_URL=https://content.manifoldcollective.com
   ```

4. Start the development server
   ```bash
   pnpm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Features

- Responsive design optimized for all devices
- Customizable templates for TTRPG content
- Integrated tools for showcasing creative work
- Resource sharing capabilities
- Community building features

## Deployment

The project uses a simple CI/CD pipeline:

1. **Trigger**: Updating the version number in `package.json` and pushing to the master branch automatically triggers the deployment workflow
2. **Build Process**: GitHub Actions builds a Docker image and pushes it to Docker Hub under the tags `dukerupert/mcc-web:latest` and `dukerupert/mcc-web:{version}`
3. **Deployment**: Watchtower running on the VPS detects the updated Docker image and automatically pulls and deploys the new version

The GitHub workflow and Dockerfile are included in the repository.

## Contributing

We welcome contributions from the community! Please read our contributing guidelines before submitting pull requests.

## License

Specify your license information here.

## Contact

- Website: [manifoldcollective.com](https://manifoldcollective.com)
- Email: [logan@fireflysoftware.dev](mailto:logan@fireflysoftware.dev)

## Acknowledgements

- All the contributors and TTRPG creators who are part of The Manifold
- The Draw Steel community
- Open source technologies that make this project possible