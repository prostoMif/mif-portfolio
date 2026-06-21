import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SITE_URL } from "@/lib/content";
import "./globals.css";

const title = "Fullstack-разработчик — портфолио";
const description =
  "Делаю сайты, боты и веб-приложения под ключ. Быстро и качественно.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "mif | Fullstack-разработчик",
    template: "%s | mif",
  },
  description,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "mif.dev",
    title,
    description,
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "mif — fullstack-разработчик",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
