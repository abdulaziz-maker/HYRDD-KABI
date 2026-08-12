import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "مشروع شركة كابي",
  description: "Next.js + React + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}