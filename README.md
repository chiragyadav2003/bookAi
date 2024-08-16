# Particle Background Web App

This is a React application that showcases a particle background effect using `react-tsparticles`. The project includes a Navbar, a Pricing Section, and a particle animation that renders in the background, adding a modern aesthetic to the web page.

## Features

- **Particle Background:** A dynamic particle effect running smoothly in the background using `react-tsparticles`.
- **Responsive Design:** The UI is responsive and adapts to different screen sizes, providing a seamless experience on both desktop and mobile devices.
- **Dark Mode:** Supports light and dark themes, enhancing usability and accessibility.

## Tech Stack

- **React** : A JavaScript library for building user interfaces.
- **TypeScript** : Provides type safety and better developer experience.
- **Tailwind CSS** : A utility-first CSS framework for rapidly building custom designs.
- **tsparticles** : A lightweight library for creating animated particle backgrounds.

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## Project Structure

```
  ├── public
  │ └── index.html
  ├── src
  │ ├── components
  │ │ ├── darkParticleBackground.tsx
  │ │ ├── lightParticleBackground.tsx
  │ │ ├── Navbar.tsx
  │ │ ├── PricingSection.tsx
  │ │ └── ParticleBackground.tsx
  │ ├── contexts
  │ │ └── ThemeContext.tsx
  │ ├── App.tsx
  │ ├── index.css
  │ └── main.tsx
  ├── package.json
  ├── tailwind.config.js
  └── README.md
```

- components: Contains the React components like Navbar, PricingSection, and ParticleBackground.
- contexts: Includes context providers like ThemeContext for managing global state.
- styles: Houses global styles and configurations.
- App.tsx: The main component that ties everything together.
- index.tsx: Entry point of the application.
