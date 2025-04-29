import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientNavbarWrapper from './components/ClientNavbarWrapper';

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "WorldTrismegisto | Cell-Level Energy Boost",
  description: "Clinically researched supplement targeting cell performance, metabolism, and long-term health.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${robotoMono.variable} antialiased`}
      >
        <ClientNavbarWrapper />
        {children}
      </body>
    </html>
  );
}
