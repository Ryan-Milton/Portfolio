import { Ubuntu, Ubuntu_Mono } from "next/font/google";

export const fontSans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
});

export const fontMono = Ubuntu_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});
