import localFont from 'next/font/local'

export const ZalandoSansSemiExpanded = localFont({
  src: '../../../public/assets/fonts/font-zalando-sans-semiexpanded-var.ttf',
  weight: '200 900',
  variable: '--font-display',
  display: 'swap',
});

export const InstrumentSans = localFont({
  src: '../../../public/assets/fonts/font-instrument-sans-var.ttf',
  weight: '400 700',
  variable: '--font-content',
  display: 'swap',
});

export const ChivoMono = localFont({
  src: '../../../public/assets/fonts/font-chivo-mono-var.ttf',
  weight: '100 900',
  variable: '--font-technical',
  display: 'swap',
});