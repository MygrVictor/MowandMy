import { useInView } from "../hooks/useInView";

function joinClasses(...values) {
  return values.filter(Boolean).join(" ");
}

export default function ScrollReveal({
  as: Tag = "div",
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.16,
  rootMargin = "0px 0px -12% 0px",
}) {
  const { ref, isInView } = useInView({ threshold, rootMargin });

  return (
    <Tag
      ref={ref}
      className={joinClasses(
        "scroll-reveal",
        `scroll-reveal--${direction}`,
        isInView && "is-visible",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
