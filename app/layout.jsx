import './globals.css';

export const metadata = {
  title: 'Spiral Park',
  description: 'Живое пространство на Мадейре',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head />
      <body>{children}</body>
    </html>
  );
}
