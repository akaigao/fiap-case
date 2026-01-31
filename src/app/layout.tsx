import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';

const montserrat = Montserrat({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FIAP - Faculdade de Tecnologia e Inovacao',
  description:
    'A FIAP e referencia em educacao tecnologica no Brasil. Cursos de graduacao e pos-graduacao em tecnologia, inovacao e negocios.',
  keywords: [
    'FIAP',
    'faculdade',
    'tecnologia',
    'inovacao',
    'cursos',
    'graduacao',
    'pos-graduacao',
    'TI',
    'programacao',
  ],
  authors: [{ name: 'FIAP' }],
  openGraph: {
    title: 'FIAP - Faculdade de Tecnologia e Inovacao',
    description:
      'A FIAP e referencia em educacao tecnologica no Brasil. Cursos de graduacao e pos-graduacao em tecnologia, inovacao e negocios.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
