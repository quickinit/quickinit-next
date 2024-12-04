# 🚀 QuickInit Next.js Starter Template

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
- **Absolute Imports** configured
- **Dark Mode** support with shadcn/ui
- **API Routes** examples
- **Error Handling** setup
- **Environment Variables** configuration
- Builtin **Logs** Management using **winston**
- Context management using **zustand**
- GitHub Workflows for merge checks

## 📦 Getting Started

### Quick Installation

```bash
npx create-qi@latest
```

### Prerequisites

- Node.js 20 or later
- pnpm (recommended) or npm

### Manual Installation

1. Clone the repository:

```bash
git clone https://github.com/quickinit/quickinit-next.git your-project
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
├── .husky/             # Git hooks configuration
├── app/                # Application routing and page components
├── components/
│   └── ui/             # Reusable UI components from shadcn/ui
├── config/             # Global configuration files
├── constants/          # Constant values and enums
├── lib/                # Shared utility functions and helpers
├── hooks/              # Custom React hooks
├── logger/             # Logging configuration and utilities
├── messages/           # Toast and notification system
├── prisma/             # Prisma ORM database schema and migrations
├── services/           # API service layers and external integrations
├── public/             # Static assets and public files
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
├── validations/        # Zod validation schemas
└── .github/
    └── workflows/      # Github workflows
```

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server with Next.js
- `pnpm build` - Build production bundle with Next.js
- `pnpm start` - Start production server with Next.js
- `pnpm test` - Run tests with Jest
- `pnpm lint` - Run linting with Next.js
- `pnpm type-check` - Run TypeScript checks with Next.js
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code format with Prettier
- `pnpm prepare` - Install Husky hooks
- `pnpm db:generate` - Generate Prisma database schema
- `pnpm db:push` - Push Prisma database schema to database
- `pnpm db:studio` - Open Prisma database studio
- `pnpm db:migrate` - Run Prisma database migrations
- `pnpm db:deploy` - Deploy Prisma database migrations
- `pnpm db:reset` - Reset Prisma database migrations

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
DATABASE_URL="mongodb://localhost:27017/starter"
NEXTAUTH_SECRET="super-secret"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_FRONTEND_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_BACKEND_BASE_URL="http://localhost:3000/api"
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

- [Rushi Gandhi](https://rushi-web.vercel.app/)
- [Nilesh Darji](https://nileshdarji.me/)
