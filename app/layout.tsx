import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UX Case Study | Arun T Scaria",
  description: "Comprehensive UX case study demonstrating user research, design process, and implementation of user-centered design solutions.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📱</text></svg>",
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
        {children}
      </body>
    </html>
  );
}
