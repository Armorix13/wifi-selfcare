import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Poppins, Open_Sans } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WifiSelfCare - Bringing Seamless WiFi to Every Home',
  description: 'Leading WiFi solution provider connecting India with precision, innovation, and 24/7 support. Explore our services with BSNL, Airtel, Jio, and more.',
  keywords: 'WiFi, Internet, BSNL, Airtel, Jio, India, Connectivity, Broadband',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} font-poppins antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
