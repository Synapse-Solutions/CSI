import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Central School International",
  description: "Central School International",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Favicon_CSI.png" sizes="any" />
      </head>
      <body className={inter.className}>
      <Toaster position="bottom-center" reverseOrder={false} />{children}</body>
    </html>
  );
}
