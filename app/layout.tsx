import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FixedSocialCards from "@/components/general/FixedSocialCards";

const gelica = localFont({
  src: [
    {
      path: '../public/fonts/gelica-black.otf',
      weight: '900'
    },
    {
      path: '../public/fonts/gelica-bold.otf',
      weight: '800'
    },
    {
      path: '../public/fonts/gelica-medium.otf',
      weight: '500'
    },
    {
      path: '../public/fonts/gelica-regular.otf',
      weight: '400'
    }
  ],
  variable: '--font-gelica'
});

const eculid = localFont({
  src: [
    {
      path: '../public/fonts/eculid-bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/eculid-semibold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/eculid-medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/eculid-regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-eculid'
})

export const metadata: Metadata = {
  title: "Uzoamaka Aniunouh",
  description: "Uzoamaka Aniunoh is a vibrant and dynamic Nigerian actor, writer and director, renowned for her captivating presence on digital platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gelica.variable} ${eculid.variable} font-sans`}
      >
        <FixedSocialCards />
        {children}
      </body>
    </html>
  );
}
