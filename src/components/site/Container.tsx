import type { ReactNode } from "react";

export function Container({
  children,
  size = "default",
  className = "",
}: {
  children: ReactNode;
  size?: "narrow" | "default" | "wide";
  className?: string;
}) {
  const max =
    size === "narrow"
      ? "max-w-[720px]"
      : size === "wide"
        ? "max-w-[1280px]"
        : "max-w-[960px]";
  return (
    <div className={`mx-auto ${max} px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  eyebrow,
  id,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  eyebrow?: string;
  id?: string;
  className?: string;
  size?: "narrow" | "default" | "wide";
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <Container size={size}>
        {eyebrow ? (
          <div className="eyebrow mb-10 md:mb-14">{eyebrow}</div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}