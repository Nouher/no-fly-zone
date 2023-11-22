import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../app/providers";
import Banner from "../app/components/Banner";
import Footer from "../app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "No Fly Zone",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Banner />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
