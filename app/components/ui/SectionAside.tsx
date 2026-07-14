interface SectionAsideProps {
  label?: string;
  title: string;
  titleAccent?: string;
  className?: string;
}

export default function SectionAside({
  label,
  title,
  titleAccent,
  className = "",
}: SectionAsideProps) {
  return (
    <aside className={`lg:sticky lg:top-32 lg:self-start ${className}`}>
      {label && (
        <p className="mb-4 font-mono text-label-caps text-primary">{label}</p>
      )}
      <h2 className="font-display text-headline-lg leading-tight">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-neon-purple">{titleAccent}</span>
          </>
        )}
      </h2>
    </aside>
  );
}
