/* eslint-disable @next/next/no-head-element */
import { StyledComponentsRegistry } from "../lib/registry";
import { Inter } from "next/font/google";
import Nav from "./Nav";
import { Background } from "ui";

export type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
<<<<<<< HEAD
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Nav />
          {children}
        </StyledComponentsRegistry>
=======
      <body className={openSans.className}>
        <Background>
          <StyledComponentsRegistry>
            <Nav />
            {children}
          </StyledComponentsRegistry>
        </Background>
>>>>>>> main
      </body>
    </html>
  );
}
