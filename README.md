# Total Look - Premium Beauty Salon Website

A modern, visually stunning, and highly performant website created for **Total Look**, a premium beauty salon. This project is designed to reflect elegance, professionalism, and creativity, while being highly engaging and conversion-focused to attract and retain clients.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Design & Style Guide](#design--style-guide)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This website serves as the primary digital presence for the "Total Look" salon. The core objective is to create a captivating user experience that not only showcases the salon's exceptional services and talented team but also drives client bookings through strategic UI/UX design and clear calls-to-action. The design is fully responsive, ensuring a seamless experience across all devices, from mobile phones to desktops.

## Live Demo

**(Placeholder)** A live version of the website can be viewed here: **[www.totallook-demo.com](https://www.totallook-demo.com)**

## Key Features

-   **Stunning Visuals & Animations:** Subtle, professional animations on scroll, hover, and page load to create an elegant and dynamic user experience.
-   **Fully Responsive Design:** A mobile-first approach ensures the website looks and functions perfectly on all screen sizes.
-   **Multi-Page Architecture:** A complete and intuitive site structure including:
    -   **Homepage:** Featuring a hero section, services preview, transformation gallery, testimonials, and animated stats.
    -   **About Page:** Detailing the salon's story, a "Meet the Team" section with interactive flip cards, salon features, and accolades.
    -   **Services Page:** A detailed breakdown of all services offered, categorized for easy navigation.
    -   **Contact Page:** Includes contact details, an interactive map placeholder, and a robust contact form with validation.
    -   **Careers Page:** Showcasing company culture, benefits, open positions with expandable details, and employee testimonials.
    -   **Booking Page:** A dedicated appointment request form as placeholder functionality for a full booking system.
-   **Interactive Components:**
    -   Image carousels for galleries and testimonials (using SwiperJS).
    -   Interactive team member cards with a 3D flip effect.
    -   Animated counters that trigger on scroll.
-   **Robust Form Handling:**
    -   Client-side validation with `React Hook Form` and `Zod`.
    -   Elegant floating labels for a modern UI.
    -   Loading and success/error states for a clear user feedback loop.

## Tech Stack

-   **Framework:** [React](https://reactjs.org/) (v18.2)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [CSS Modules](https://github.com/css-modules/css-modules) for component-scoped styles & Global CSS for theme variables.
-   **Routing:** [React Router DOM](https://reactrouter.com/) (v6)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation.
-   **Carousels/Sliders:** [SwiperJS](https://swiperjs.com/)
-   **Deployment:** (e.g., Vercel)


## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16.x or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DaphneDana/salon-react.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd vite-project
    ```
3.  **Install the dependencies:**
    -   Using npm:
        ```bash
        npm install
        ```
    -   Using yarn:
        ```bash
        yarn install
        ```
4.  **Start the development server:**
    -   Using npm:
        ```bash
        npm run dev
        ```
    -   Using yarn:
        ```bash
        yarn dev
        ```
5.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Available Scripts

In the project directory, you can run:

-   `npm run dev` or `yarn dev`: Runs the app in development mode.
-   `npm run build` or `yarn build`: Builds the app for production to the `dist` folder.
-   `npm run lint` or `yarn lint`: Lints the code using ESLint to find and fix problems.
-   `npm run preview` or `yarn preview`: Serves the production build locally to preview before deployment.

## Design & Style Guide

### Color Palette

The visual identity of "Total Look" is defined by a mandatory, elegant color palette.

| Color Name      | Hex Code |
| --------------- | -------- |
| **Primary Rose Gold** | `#E8B4A0`  |
| **Deep Plum**       | `#6B2C5C`  |
| **Cream White**     | `#FAF7F2`  |
| **Coral Pink**      | `#FF6B7A`  |
| **Sage Green**      | `#87A96B`  |
| **Charcoal Gray**   | `#2C2C2C`  |

### Typography

-   **Headings:** `Playfair Display`, a sophisticated serif font for an elegant and high-end feel.
-   **Body Text:** `Montserrat`, a clean and modern sans-serif font for excellent readability.

## Future Enhancements

This project provides a solid foundation. Future enhancements could include:

-   **Full Backend Integration:** Connecting the contact and booking request forms to a backend service (e.g., Node.js/Express, or a serverless function) to handle submissions and notify the salon.
-   **Live Booking System:** Integrating a third-party salon booking system (e.g., Fresha, Square Appointments) or building a custom one.
-   **Content Management System (CMS):** Integrating a headless CMS (like Sanity, Strapi, or Contentful) to allow the salon staff to easily update services, prices, team members, and gallery images without needing a developer.
-   **Live Social Media Feed:** Replacing the placeholder social media grid with a live feed from the salon's Instagram or Facebook profile.
-   **Advanced SEO & Performance Optimization:** Implementing server-side rendering (SSR) or static site generation (SSG), further image optimization (e.g., with `<picture>` tags), and detailed schema markup.
-   **Accessibility (WCAG 2.1 AA) Audit:** Conducting a full accessibility audit and implementing any necessary fixes to ensure the site is usable by everyone.

## Contributing

Contributions are welcome! If you have suggestions for improving the project, please feel free to fork the repository and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is distributed under the MIT License. See `LICENSE` for more information.
