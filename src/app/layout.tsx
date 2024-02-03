import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RequestPlaceholderNext",
  description: "Validation of requests to JSONPlaceholder with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ChakraProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
