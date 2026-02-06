// System font stacks — no network fetch required.
// Replace with next/font/google imports (Ubuntu, Ubuntu_Mono) when deploying
// to an environment with internet access (e.g. Vercel).

export const fontSans = {
  className: "",
  variable: "--font-sans",
  style: {
    fontFamily:
      "'Ubuntu', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
};

export const fontMono = {
  className: "",
  variable: "--font-mono",
  style: {
    fontFamily:
      "'Ubuntu Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
};
