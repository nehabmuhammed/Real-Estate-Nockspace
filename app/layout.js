import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Guardians of Capital | Antigravity Architecture",
  description:
    "Where unmatched structural integrity merges with architectural innovation. Discover the gravity-defying architecture of Guardians of Capital — a limited-release residential masterpiece embedded in the canyon.",
  keywords: "luxury real estate, canyon architecture, desert home, modern architecture, high-end property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-full antialiased font-inter bg-[#f5f4ef] text-[#111]">{children}</body>
    </html>
  );
}
