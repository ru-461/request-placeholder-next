import { Container } from '@/components/common';

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main" maxWidth="container.xl">
      {children}
    </Container>
  );
}
