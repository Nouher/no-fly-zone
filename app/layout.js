import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "No Fly Zone",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
