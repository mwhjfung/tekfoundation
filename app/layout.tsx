import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "tekFoundation — we amplify the impact of charities",
    template: "%s — tekFoundation",
  },
  description:
    "tekFoundation connects Australian charities with skilled tech volunteers and trusted partners — turning community goodwill into real capability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body className={jakarta.variable}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
