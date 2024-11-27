# 🚀 Next.js 14 Starter Template

A modern, production-ready starter template for Next.js 14 applications featuring shadcn/ui components, form validation,
and automated deployments.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-blueviolet.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **shadcn/ui** for beautiful, accessible components
- **Tailwind CSS** for styling
- **Zod** for robust form validation
- **React Hook Form** for form handling
- **ESLint** and **Prettier** for code quality
- **Jest** and **React Testing Library** for testing
- **Husky** for Git hooks
- **Commitlint** for consistent commit messages
- **GitHub Actions** for automated deployment
- **Absolute Imports** configured
- **SEO** optimization out of the box
- **Dark Mode** support with shadcn/ui
- **API Routes** examples
- **Error Handling** setup
- **Environment Variables** configuration

## 📦 Getting Started

### Prerequisites

- Node.js 20 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Rushi0508/nextjs-starter.git your-project
cd your-project
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 🏗️ Project Structure

```
├── app/                 # App router pages
├── components/
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── styles/             # Global styles
├── public/             # Static assets
├── tests/              # Test files
├── types/              # TypeScript types
├── schemas/            # Zod validation schemas
└── .github/
    └── workflows/      # GitHub Actions workflows
```

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm lint` - Run linting
- `pnpm type-check` - Run TypeScript checks

### Form Validation

This template uses Zod with React Hook Form for robust form validation:

```typescript
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export function LoginForm() {
	const form = useForm({
		resolver: zodResolver(schema),
	});
	// ...
}
```

### Environment Variables

Configure your environment variables in `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch


# Generate coverage report
pnpm test:coverage
```

### Automated Deployment

This template uses GitHub Actions for automated deployment. To trigger a deployment:

1. Include "DEPLOY" in your commit message:

```bash
git commit -m "feat: add new feature DEPLOY"
```

2. Push to your repository:

```bash
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your application.

### Code Quality

This template includes:

- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- Commitlint for commit message standards

## 📚 Documentation

- [shadcn/ui Components](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)

## 🚀 Deployment

The template uses GitHub Actions for automated deployments. The workflow is triggered when:

- A commit message contains "DEPLOY"
- Push to main branch
- Pull request to main branch

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)

## 📧 Contact

Rushi Gandhi - [@thenileshdarji](https://twitter.com/thenileshdarji) Nilesh Darji -
[@thenileshdarji](https://twitter.com/thenileshdarji)
