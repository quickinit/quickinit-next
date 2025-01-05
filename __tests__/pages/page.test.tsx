import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { useSession } from 'next-auth/react';

describe('Page', () => {
	it('renders unauthenticated state with main CTA', () => {
		(useSession as jest.Mock).mockReturnValue({
			data: null,
			status: 'unauthenticated',
		});

		render(<HomePage />);

		expect(screen.getByText('QuickInit Next')).toBeInTheDocument();
		expect(screen.getByText(/Enterprise-Grade Next.js Starter Kit/)).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Login/i })).toBeInTheDocument();
	});

	it('renders authenticated state with user info', () => {
		(useSession as jest.Mock).mockReturnValue({
			data: {
				user: {
					name: 'Test User',
					email: 'test@example.com',
				},
			},
			status: 'authenticated',
		});

		render(<HomePage />);

		expect(screen.getByText(/Test User/)).toBeInTheDocument();
		expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Log out/i })).toBeInTheDocument();
	});
});
