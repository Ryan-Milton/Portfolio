const DATE_FORMATS = {
  long: { day: "numeric", month: "long", year: "numeric" },
  short: { day: "numeric", month: "short", year: "numeric" },
} satisfies Record<string, Intl.DateTimeFormatOptions>;

export function formatUtcDate(
  value: string,
  style: keyof typeof DATE_FORMATS = "long",
): string {
  const date = new Date(value.includes("T") ? value : `${value}T00:00:00Z`);

  return new Intl.DateTimeFormat("en-US", {
    ...DATE_FORMATS[style],
    timeZone: "UTC",
  }).format(date);
}

export function toUtcIsoDate(value: string): string {
  return new Date(value.includes("T") ? value : `${value}T00:00:00Z`).toISOString();
}
