import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  metadataBase: new URL("https://www.sickwear.xyz"),
  title: {
    default: "Sickwear – Web3, Event & Personalized Merch Partner",
    template: "%s | Sickwear",
  },
  description:
    "Custom Web3, event & personalized merch trusted by Coinbase, ETHGlobal & 80+ global brands. Fast turnaround, crypto or fiat payment, worldwide shipping.",
  keywords: [
    "web3 merch",
    "web3 merchandise",
    "crypto merch",
    "NFT merchandise",
    "DAO merchandise",
    "blockchain merchandise",
    "web3 community merch",
    "custom merch india",
    "web3 event merchandise",
    "ETHGlobal merch",
    "crypto hoodie",
    "web3 tshirt",
    "custom hoodies india",
    "merch for startups",
    "b2b merch partner",
    "sickwear",
    "sickwear.xyz",
  ],
  authors: [{ name: "Sickwear", url: "https://www.sickwear.xyz" }],
  creator: "Sickwear",
  publisher: "Sickwear",
  category: "ecommerce",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sickwear.xyz",
    siteName: "Sickwear",
    title: "Sickwear – Web3, Event & Personalized Merch Partner",
    description:
      "Custom Web3, event & personalized merch trusted by Coinbase, ETHGlobal & 80+ global brands. Fast turnaround, crypto or fiat payment, worldwide shipping.",
    images: [
      {
        url: "/images/sickwear-logo-color.png",
        width: 1200,
        height: 630,
        alt: "Sickwear – Web3 Merch Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sickwear_xyz",
    creator: "@sickwear_xyz",
    title: "Sickwear – Web3, Event & Personalized Merch Partner",
    description:
      "Custom Web3, event & personalized merch trusted by 80+ global brands. Fast turnaround, crypto or fiat payment, worldwide shipping.",
    images: ["/images/sickwear-logo-color.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.sickwear.xyz",
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://www.sickwear.xyz" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sickwear",
              url: "https://www.sickwear.xyz",
              logo: "https://www.sickwear.xyz/images/sickwear-logo-color.png",
              description:
                "Sickwear is a premium merchandise partner for Web3 communities, events, and personalized brand merch, trusted by 80+ global companies. Global shipping and crypto payments.",
              dateModified: "2026-07-10",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "sickwear.xyz@gmail.com",
                availableLanguage: "English",
              },
              sameAs: [
                "https://x.com/sickwear_xyz",
                "https://t.me/sickweareth",
              ],
              areaServed: "Worldwide",
              foundingLocation: "India",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
