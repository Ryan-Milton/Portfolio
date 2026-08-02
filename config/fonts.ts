import { Ubuntu, Ubuntu_Mono } from "next/font/google";

export const fontSans = Ubuntu({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
});

export const fontMono = Ubuntu_Mono({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
});
