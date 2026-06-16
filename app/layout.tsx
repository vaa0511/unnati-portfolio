import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Unnati Mandaliya | Full Stack Developer",
  description:
    "Portfolio of Unnati Mandaliya, Full Stack Developer with PHP, Laravel, Vue.js, MySQL, REST API, technical leadership, and project delivery experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
