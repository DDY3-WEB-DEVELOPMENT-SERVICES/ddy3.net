import { Metadata } from 'next'

import '@/app/--sources/styles/globals.css'
import { 
  ZalandoSansSemiExpanded, 
  InstrumentSans, 
  ChivoMono 
} from '@/app/--sources/registries/fonts'
import { NavigationBar } from '@/app/--sources/registries/components';

export const metadata: Metadata = { title: "DDY3 Forefronter", description: "Bringing your ideas from wisdom to web." };

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