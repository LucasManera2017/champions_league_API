import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import "./globals.css";
 
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={cn('text-base antialiased', inter.className)}>{children}</body>
    </html>
  );
}