import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pomodoro",
  description: "Boost your Productivity",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
