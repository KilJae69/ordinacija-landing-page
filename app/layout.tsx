import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
// import { GoogleAnalytics } from '@next/third-parties/google'

import { Partytown } from "@qwik.dev/partytown/react";
import Script from "next/script";
// import Script from "next/script";

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
      <head>
        {/* Preconnect for better performance */}
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          as="script"
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          as="script"
        />
        <Partytown
          forward={["gtag", "dataLayer.push"]}
          debug={process.env.NODE_ENV === "development"}
        />
      </head>
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
          {/* GA4 Implementation */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z821ZH8DDP');
            `,
          }}
        />
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Z821ZH8DDP"
        />
      </body>
      {/* <GoogleAnalytics gaId="G-Z821ZH8DDP" /> */}
    </html>
  );
}
