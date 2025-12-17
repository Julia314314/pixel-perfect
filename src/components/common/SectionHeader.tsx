interface SectionHeaderProps {
  title: string;
  hint?: string;
}

export const SectionHeader = ({ title, hint }: SectionHeaderProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {hint && (
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
};
