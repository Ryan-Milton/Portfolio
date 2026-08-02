interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerChildren({
  children,
  className,
}: StaggerChildrenProps) {
  return <div className={className}>{children}</div>;
}
