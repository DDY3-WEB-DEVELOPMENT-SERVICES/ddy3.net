import localFont from "next/font/local";
import './globals.css'

import {NavigationBar} from './ComponentRegistry';

const ZalandoSansSemiExpanded = localFont({
  src: '../public/app-fonts/font-zalando-sans-semiexpanded-var.ttf',
  weight: '200 900',
  variable: '--font-display',
  display: 'swap',
});

const InstrumentSans = localFont({
  src: '../public/app-fonts/font-instrument-sans-var.ttf',
  weight: '400 700',
  variable: '--font-content',
  display: 'swap',
});

const ChivoMono = localFont({
  src: '../public/app-fonts/font-chivo-mono-var.ttf',
  weight: '100 900',
  variable: '--font-technical',
  display: 'swap',
});

export default function RootLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <html lang="en" className={`${ZalandoSansSemiExpanded.variable} ${InstrumentSans.variable} ${ChivoMono.variable}`}>
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}