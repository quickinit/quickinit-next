'use client';
import { ThemeProvider } from '@/components/theme-providers';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SessionProvider } from 'next-auth/react';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<SessionProvider>
			<ThemeProvider attribute='class' defaultTheme='system' disableTransitionOnChange>
				<TooltipProvider>{children}</TooltipProvider>
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
