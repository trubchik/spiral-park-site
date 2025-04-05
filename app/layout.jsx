import './globals.css';

export const metadata = {
  title: 'Spiral Park',
  description: 'Живое пространство на Мадейре',
};

export default function RootLayout(props) {
  return (
    <html lang="ru">
      <head />
      <body>{props.children}</body>
    </html>
  );
}
