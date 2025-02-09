import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const poppins = Poppins({
  subsets: ["latin"], // Choose language subsets as needed
  weight: ["200", "300", "400", "500", "700"], // Include only the weights you use
  variable: "--font-poppins", // Optional CSS variable
  preload: true, // Ensures the font is preloaded automatically
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="!scroll-smooth ">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        <LazyMotion features={domAnimation}>
          <ActiveSectionContextProvider>
            <Header /> 
            {children}
          </ActiveSectionContextProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
