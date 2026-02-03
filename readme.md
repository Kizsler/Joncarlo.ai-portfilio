# Joncarlo.ai

**Interactive 3D Portfolio with Embedded 2D Operating System**

A creative portfolio website featuring a fully-rendered 3D computer scene with an interactive 2D OS running inside the monitor. Built with Three.js, React, and custom WebGL shaders.

![Three.js](https://img.shields.io/badge/Three.js-0.137-black?logo=three.js&logoColor=white)
![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.6-3178C6?logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.9-88CE02)

**[Live Demo](https://joncarlo.ai/)**

## Features

- **3D Computer Scene** - Fully modeled computer environment with realistic lighting
- **Interactive 2D OS** - Functional operating system running inside the 3D monitor
- **Retro Games** - Playable Doom, Oregon Trail, and Henordle inside the virtual OS
- **Custom Shaders** - GLSL shaders for monitor glow and CRT effects
- **Responsive Audio** - Spatial audio that responds to camera position
- **Smooth Animations** - GSAP and Tween.js powered transitions
- **Contact Form** - Integrated email system via Resend API

## Tech Stack

**3D Rendering**
- Three.js - WebGL 3D graphics
- Custom GLSL shaders - Monitor effects, lighting
- Camera Controls - Smooth orbital navigation

**Frontend**
- React 17 with TypeScript
- GSAP + Tween.js for animations
- Framer Motion for UI transitions
- Webpack for bundling

**Backend**
- Express.js server
- Resend API for contact form
- Nodemailer fallback

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Three.js Scene                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              3D Computer Model                       │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │         Monitor (Render Target)              │    │   │
│  │  │  ┌─────────────────────────────────────┐    │    │   │
│  │  │  │        React 2D OS                   │    │    │   │
│  │  │  │  • File Explorer                     │    │    │   │
│  │  │  │  • Applications (Doom, etc.)         │    │    │   │
│  │  │  │  • Contact Form                      │    │    │   │
│  │  │  └─────────────────────────────────────┘    │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Kizsler/Joncarlo.ai-portfilio.git
cd portfolio-website-master

# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Build

```bash
# Build for production
npm run build

# Serve with Express
npm start
```

## Project Structure

```
├── src/
│   ├── Application/        # Three.js scene setup
│   │   ├── Audio/          # Spatial audio system
│   │   ├── Camera/         # Camera controls
│   │   ├── UI/             # Loading screen, overlays
│   │   └── World/          # 3D objects, environment
│   └── index.html          # Entry point
├── inner-site-src/         # 2D OS React application
│   └── src/
│       ├── components/
│       │   ├── applications/   # Doom, Oregon Trail, etc.
│       │   └── showcase/       # Portfolio sections
│       └── os/                 # OS window management
├── static/
│   ├── models/             # 3D models (GLTF)
│   └── textures/           # Baked textures
├── server/                 # Express backend
└── bundler/                # Webpack configuration
```

## Embedded Applications

The virtual OS includes:

| App | Description |
|-----|-------------|
| **Doom** | Classic FPS running via js-dos emulator |
| **Oregon Trail** | Retro adventure game |
| **Henordle** | Word puzzle game |
| **Showcase Explorer** | Project portfolio viewer |
| **Credits** | Attribution and tech stack |

## Configuration

Environment variables for the contact form:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_TO=your@email.com
```

## Deployment

Configured for Fly.io deployment:

```bash
fly deploy
```

Or use the included Dockerfile for any container platform.

## Contact

- **Website**: [joncarlo.ai](https://joncarlo.ai/)
- **Email**: jc@wearescallywag.com
- **Instagram**: [@marketed_by_jc](https://instagram.com/marketed_by_jc)

## License

MIT
