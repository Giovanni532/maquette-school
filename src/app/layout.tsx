import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";
import { BackgroundBeams } from "./components/ui/BackgroundBeams";
import NavbarLayout from "./components/NavbarLayout";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CFPT-2024 déploie ton projet de premiere année !",
  description: "CFPT-2024 déploie ton projet de premiere année !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <NavbarLayout />
          <BackgroundBeams>
            <main className="flex-grow">
              {children}
            </main>
          </BackgroundBeams>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
