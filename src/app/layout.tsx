import "./globals.scss";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spider-Verse",
  description: "Conheça os personagens do Aranhaverso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Opções de menu"
            width={36}
            height={25}
          />

          <Link href="/">
            <Image
              src="/spider-logo.svg"
              alt="Logo do Spiderman"
              width={260}
              height={70}
            />
          </Link>

          <Image
            src="/icons/user.svg"
            alt="Ícone de login"
            width={36}
            height={36}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
