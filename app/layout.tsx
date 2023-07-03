import "./globals.css";
import { Spectral } from "next/font/google";
import ClientOnly from "./components/OnlyClient";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import getCurrentUser from "./actions/getCurrentUser";

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
  const user = getCurrentUser();
  const userData = user.then((data) => console.log(data));

  return (
    <html lang="en">
      <body className={spectral.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
