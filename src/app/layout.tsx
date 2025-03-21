import "@/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import Script from "next/script";
import { env } from "process";
import { type Metadata } from "next";
import { MainProvider } from "@/commons/provider";

export const metadata: Metadata = {
  title: `Jadwal KRL — Cari & Simpan Jadwal KRL ${new Date().getFullYear()}`,
  description: `Platform website untuk mencari, menyimpan, dan memantau jadwal KRL Jakarta dan Yogyakarta dengan mudah dan cepat.`,
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase:
    env.NODE_ENV === "production"
      ? new URL("https://www.jadwal-krl.com")
      : new URL("http://localhost:3000"),
  openGraph: {
    title: `Jadwal KRL — Cari & Simpan Jadwal KRL ${new Date().getFullYear()}`,
    url: "https://www.jadwal-krl.com",
    siteName: "Jadwal KRL",
    description: `Platform website untuk mencari, menyimpan, dan memantau jadwal KRL Jakarta dan Yogyakarta dengan mudah dan cepat.`,
    images: "https://www.jadwal-krl.com/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id-ID"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>
          <MainProvider
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </MainProvider>
        </TRPCReactProvider>
      </body>
      <Script
        defer
        src="https://analytics.zulio.me/script.js"
        data-website-id="20b80658-98dc-4ef8-92d5-0a7d7d153ad0"
      />
    </html>
  );
}
