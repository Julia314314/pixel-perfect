interface SectionHeaderProps {
  title: string;
  hint?: string;
}

export const SectionHeader = ({ title, hint }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      {hint && <p className="text-sm text-muted-light">{hint}</p>}
    </div>
  );
};
