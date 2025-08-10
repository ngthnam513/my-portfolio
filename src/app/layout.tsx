import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/my-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
