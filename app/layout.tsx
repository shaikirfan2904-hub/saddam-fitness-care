import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saddam-fitness-care.vercel.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ArCUMtMZUAexNmjt2HuPG99nd_JkTw1fgE-_q0klyq4",
  },
  title: "Saddam Fitness Care | Gym in Kavali",
  description:
    "Saddam Fitness Care is a unisex A/C gym in Kavali, Andhra Pradesh, offering strength training, cardio fitness, weight training, personal training, and diet & nutrition.",
  keywords: [
    "Saddam Fitness Care",
    "Saddam Fitness Care Kavali",
    "gym in Kavali",
    "Kavali gym",
    "best gym in Kavali",
    "gym near me Kavali",
    "fitness center Kavali",
    "fitness centre Kavali",
    "unisex gym Kavali",
    "AC gym Kavali",
    "air conditioned gym Kavali",
    "weight training Kavali",
    "strength training Kavali",
    "cardio gym Kavali",
    "personal trainer Kavali",
    "personal training Kavali",
    "diet and nutrition Kavali",
    "gym membership Kavali",
    "fitness training Kavali",
    "workout gym Kavali",
    "bodybuilding gym Kavali",
    "muscle building gym Kavali",
    "Kavali fitness center",
    "Kavali fitness centre",
    "gym in Nellore district",
    "fitness center Nellore district",
  ],
  openGraph: {
    title: "Saddam Fitness Care | Gym in Kavali",
    description:
      "Saddam Fitness Care — a unisex A/C gym in Kavali offering strength training, cardio fitness, weight training, personal training, and diet & nutrition.",
    type: "website",
    locale: "en_IN",
    siteName: "Saddam Fitness Care",
    images: [
      {
        url: "/logo/logo.png",
        width: 512,
        height: 512,
        alt: "Saddam Fitness Care",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Saddam Fitness Care",
  description:
    "Saddam Fitness Care is a unisex A/C gym in Kavali, Andhra Pradesh, offering strength training, cardio fitness, weight training, personal training, and diet & nutrition.",
  telephone: "+91 99488 66755",
  url: "https://saddam-fitness-care.vercel.app",
  logo: "https://saddam-fitness-care.vercel.app/logo/logo.png",
  image: "https://saddam-fitness-care.vercel.app/logo/logo.png",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.913319,
    longitude: 79.993465,
  },
    hasMap:
    "https://www.google.com/maps/search/?api=1&query=14.913319,79.993465",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karimulla Electronics, c/o, Thummalapenta Rd, Vaddi Palem",
    addressLocality: "Kavali",
    addressRegion: "Andhra Pradesh",
    postalCode: "524201",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "05:00",
      closes: "09:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "17:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/saddamgk.fit?stkn=MTMycnNwN25ncmVybA==",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${plusJakartaSans.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}