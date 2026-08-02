export function AnimatedGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function AnimatedGridItem({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
