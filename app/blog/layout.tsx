export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-4xl py-8 md:py-12">
      <div className="w-full text-left">{children}</div>
    </section>
  );
}
