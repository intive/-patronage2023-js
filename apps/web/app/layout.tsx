"use client";

import "./global.css";
import { StyledComponentsRegistry } from "../lib/registry";
import { Inter } from "next/font/google";

export type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>

      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
