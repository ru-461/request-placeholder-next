import type { Metadata } from 'next';
import { Providers } from './providers';
import Header from './Header';
import Main from './Main';

export const metadata: Metadata = {
  title: 'RequestPlaceholderNext',
  description: 'Validation of requests to JSONPlaceholder with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Header />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
