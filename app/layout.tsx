import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Booking.com Clone",
  keywords: "booking.com clone, booking.com, hotel booking",
  description:
    "Experience the best hotel booking platform with our Booking.com clone. We offer top-notch hotel booking services with real-time room availability. Explore and book your ideal hotel at the best price.",
  openGraph: {
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://content.presspage.com/clients/o_685.jpg",
        alt: "booking.com",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
