import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";


const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
})


export const metadata = {
  title: "Angels NS",
  description: "Salon lepote u srcu Novog Sada. Pruzamo sve vrste kozmeticarskih i frizerskih usluga.",
  metadataBase: new URL("https://www.angelsns.com"),
  openGraph: {
    title: "AngelsNS",
    description: "Salon lepote u srcu Novog Sada. Pruzamo sve vrste kozmeticarskih i frizerskih usluga.",
    url: "https://www.angelsns.com",
    siteName: "AngelsNS",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "AngelsNS luksuzni stil života",
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
    <html lang="en">
       
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable}${ebGaramond.variable} antialiased relative`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
