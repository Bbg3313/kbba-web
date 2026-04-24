type MainSectionEyebrowProps = {
  label: string;
  align?: "left" | "center";
  className?: string;
};

export function MainSectionEyebrow({
  label,
  align = "left",
  className = "",
}: MainSectionEyebrowProps) {
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignmentClass} ${className}`.trim()}>
      <span className="h-px w-16 bg-gradient-to-r from-rose-400/80 to-transparent" aria-hidden />
      <p className="max-w-full text-pretty text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-pink-600/95 sm:text-xs">
        {label}
      </p>
    </div>
  );
}
