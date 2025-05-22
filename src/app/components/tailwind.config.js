// src/app/layout.tsx
import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: 'ArtSpace',
  description: 'Art showcase platform',
};

export default function RootLayout({
  children,
}
  
) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}


