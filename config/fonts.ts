import { Ubuntu, Ubuntu_Mono as FontUbuntuMono } from "next/font/google";

export const fontSans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "400",
});

export const fontMono = FontUbuntuMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
