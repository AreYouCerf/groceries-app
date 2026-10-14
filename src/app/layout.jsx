import localFont from 'next/font/local';
import "./globals.css";

const gilroy = localFont({
  src: './fonts/Gilroy-Semibold.ttf',
  weight: '600',
  style: 'normal',
  variable: '--font-gilroy',
})

export const metadata = {
  title: "My groceries app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body>{children}</body>
    </html>
  );
}
