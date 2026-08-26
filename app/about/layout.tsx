export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full pb-12 md:pb-20">{children}</section>;
}
