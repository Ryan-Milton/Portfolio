export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl pb-12 md:pb-20">
      <div className="w-full text-left">{children}</div>
    </section>
  );
}
