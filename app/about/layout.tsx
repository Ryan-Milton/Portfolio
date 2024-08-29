export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <div className="inline-block max-w-5xl text-left justify-center">
        {children}
      </div>
    </section>
  );
}
