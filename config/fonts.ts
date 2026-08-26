import { Archivo, IBM_Plex_Mono } from "next/font/google";

export const fontSans = Archivo({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "variable",
});

export const fontMono = IBM_Plex_Mono({
  display: "optional",
  preload: false,
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: "400",
});
