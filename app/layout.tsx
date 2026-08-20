import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WorkspaceProvider from './components/WorkspaceProvider';
import WorkspaceGate from './components/WorkspaceGate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kitchen Insights',
  description: 'Cost, purchasing and kitchen control by business workspace.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WorkspaceProvider>
          <WorkspaceGate>{children}</WorkspaceGate>
        </WorkspaceProvider>
      </body>
    </html>
  );
}
