import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import '@/app/globals.css';
import '@/app/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Juhair Islam Sami | Portfolio',
    template: 'Juhair Islam Sami | %s',
  },
  description:
    "Juhair Islam Sami is a full stack web developer, student, and AI enthusiast building websites and applications you'd love to use.",
  keywords: [
    'juhair islam sami',
    'juhair',
    'sami',
    'web developer portfolio',
    'juhair web developer',
    'juhair developer',
    'Spring Boot',
    'juhair islam sami portfolio',
    'vscode-portfolio',
    'AI enthusiast',
    'Machine Learning',
    'Cybersecurity',
  ],
  openGraph: {
    title: "Juhair Islam Sami's Portfolio",
    description:
      "A full-stack developer building websites that you'd like to use.",
    url: 'https://zoo-hair.github.io',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
