import { Container } from '@/components/common';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main" maxWidth="container.xl">
      {children}
    </Container>
  );
}
