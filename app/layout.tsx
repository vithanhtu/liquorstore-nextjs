import "./globals.css";
import { Spectral } from "next/font/google";
import ClientOnly from "./components/OnlyClient";
import Header from "./components/header/Header";

const spectral = Spectral({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Liquor store app",
  description: "Liquor store using nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        <ClientOnly>{}</ClientOnly>
        {children}
      </body>
    </html>
  );
}
