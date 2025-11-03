# AI Policy Hub for Higher Education

A modern, responsive web application for presenting standardized Generative AI best-practice policies for educators and students.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: React Router v6

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky navigation bar with active link styling
│   └── PolicyCard.tsx    # Reusable card component for policy entries
├── pages/
│   └── HomePage.tsx      # Main home page with hero and policy cards
├── App.tsx               # Main app component with routing
├── main.tsx              # Application entry point
└── index.css             # Tailwind CSS directives
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Components

### Navbar

A clean, sticky navigation bar with the following features:
- Links: Home, Our Mission, Source Policies, Contact
- Active link highlighting
- Responsive design with mobile menu button
- Smooth transitions

### PolicyCard

A reusable component for displaying policy entry points:

**Props:**
- `title`: string - Card title
- `icon`: React.ReactNode - SVG icon component
- `description`: string - Card description
- `buttonText`: string - Call-to-action button text
- `href`: string - Navigation link

### HomePage

The main landing page featuring:
- **Hero Section**: Eye-catching gradient background with main headline
- **Policy Cards**: Two cards for Educators and Students guidelines

## Tailwind Configuration

Custom theme extension includes:
- Primary color palette (professional blue tones)
- Custom utilities for consistent spacing and styling

## Future Enhancements

- Add remaining pages (Our Mission, Source Policies, Contact)
- Implement mobile menu functionality
- Add detailed policy pages for educators and students
- Integrate search functionality
- Add animations and micro-interactions

## License

MIT

