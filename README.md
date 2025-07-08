# Tathya Technologies Website

A modern, responsive website for Tathya Technologies built with React, Vite, TypeScript, and Tailwind CSS. This project was created using the vite-react-typescript-starter template.

## Features

- **Modern UI Design**: Clean and professional interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Performance Optimized**: Fast loading times with Vite's build optimization
- **Accessibility**: WCAG compliant components and semantic HTML
- **Animation Effects**: Smooth transitions and animations using Framer Motion
- **TypeScript**: Type-safe code for better developer experience
- **Component-Based Architecture**: Modular and reusable components
- **Complete Website Sections**: Includes Header, Hero, Services, Portfolio, About, Team, Testimonials, Call-to-Action, Contact, and Footer components

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Project Structure

```
project/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   ├── data/          # Data files and constants
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global CSS
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
├── package.json       # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

### Data Structure

The project uses TypeScript interfaces to define data structures:

- **NavItem**: Navigation menu items with label and href
- **Service**: Service offerings with id, title, description, and icon
- **PortfolioItem**: Portfolio projects with id, title, description, image, and category
- **TeamMember**: Team member profiles with id, name, position, image, and bio
- **Testimonial**: Client testimonials with id, quote, author, position, company, and image
- **FooterSection**: Footer navigation sections with title and links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/tathy-website-rebuild1.git
   cd tathy-website-rebuild1/project
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify for automatic deployments
- **Vercel**: Import your project to Vercel for seamless deployment
- **GitHub Pages**: Deploy the `dist` folder to GitHub Pages
- **AWS S3/CloudFront**: Upload the `dist` folder to S3 and configure CloudFront

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Tathya Technologies - [contact@tathyatech.com](mailto:contact@tathyatech.com)
