import "./globals.css";
import { Spectral } from "next/font/google";
import ClientOnly from "./components/OnlyClient";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import { Providers } from "./redux/provider";
import getCurrentUser from "./actions/getCurrentUser";
import CartModal from "./components/modals/CartModal";
import Footer from "./components/footer/Footer";

const spectral = Spectral({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Liquor store app",
  description: "Liquor store using nextjs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={spectral.className}>
        <Providers>
          <ClientOnly currentUser={currentUser}>
            <LoginModal />
            <RegisterModal />
            <CartModal />
          </ClientOnly>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
