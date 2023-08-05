import Mantine from '@/Providers/MantineProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '@/Providers/ReactQueryProvider';
import Notification from '@/Providers/Notification';
import AuthProvider from '@/Providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Messenger clone',
  description: 'Messenger clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ReactQueryProvider>
            <Mantine>
              <Notification />
              {children}
            </Mantine>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
