import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"], // Choose language subsets as needed
  weight: ["200", "300", "400", "500", "700"], // Include only the weights you use
  variable: "--font-poppins", // Optional CSS variable
  preload: true, // Ensures the font is preloaded automatically
});

export const metadata: Metadata = {
  title: "OrdinacijaCMS | Digitalno upravljanje medicinskom praksom",
  description:
    "OrdinacijaCMS je moderna SaaS platforma koja omogućava jednostavno upravljanje pacijentima, zakazivanjem termina i medicinskom dokumentacijom – sve na jednom mjestu.",
  openGraph: {
    title: "OrdinacijaCMS | Digitalno upravljanje medicinskom praksom",
    description:
      "OrdinacijaCMS je moderna SaaS platforma koja omogućava jednostavno upravljanje pacijentima, zakazivanjem termina i medicinskom dokumentacijom – sve na jednom mjestu.",
    url: "https://ordinacijacms.com",
    siteName: "OrdinacijaCMS",
    images: [
      {
        url: "/ordinacija-og.png", // Postavi tačan URL do slike
        width: 1200,
        height: 630,
        alt: "OrdinacijaCMS - SaaS platforma za medicinske prakse",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body
        className={`${poppins.variable} relative  antialiased flex flex-col min-h-screen`}
      >
        <LazyMotion features={domAnimation}>
          <ActiveSectionContextProvider>
            <Header />

            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </ActiveSectionContextProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
