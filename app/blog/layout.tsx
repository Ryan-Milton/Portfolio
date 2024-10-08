export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-8 md:py-10">
      <div className="inline-block text-left justify-center">{children}</div>
    </section>
  );
}
