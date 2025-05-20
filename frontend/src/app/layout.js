export const metadata = {
  title: 'Meu Projeto Next.js',
  description: 'Um projeto Next.js básico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
