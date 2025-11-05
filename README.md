# Mars-Based Portfolio

Basicament he muntat aixo per al proces de Mars Based, pero si no m'agafen
suposo que ho puc anar expandint.

## Tech Stack

This project was built using modern web technologies:

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **next-themes** - Dark/light mode support
- **class-variance-authority** - Component variants
- **tw-animate-css** - Tailwind animations

### Content Management

- **MDX (next-mdx-remote)** - Mix Markdown with React components
- **gray-matter** - Parse frontmatter from MDX files
- **sugar-high** - Syntax highlighting for code blocks

### Forms & Validation

- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation adapter

### Additional Features

- **Resend** - Email service integration
- **Sonner** - Toast notifications
- **Prettier** - Code formatting with Tailwind plugin

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 20 or higher recommended).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/lluissuros/mars-based-portfolio.git
cd mars-based-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see
   the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/content` - MDX content files (posts, intro, etc.)
- `/lib` - Utility functions and server actions
- `/public` - Static assets

## Content Management

Content is written in MDX format, which allows mixing Markdown with React
components. This makes it easy to create rich, interactive technical essays
while maintaining the simplicity of Markdown.

You can edit content files in the `/content` directory. The site automatically
renders them with proper styling and component support.

## Development Notes

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

## License

This project is private and for portfolio purposes.
