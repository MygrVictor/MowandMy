import { useEffect, useRef, useState } from "react";

export function useInView({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return undefined;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  return { ref, isInView };
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    let lastOffset = 0;

    const handleScroll = () => {
      if (!ref.current) return;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const elementTop = ref.current.getBoundingClientRect().top;
        const newOffset = elementTop * speed;

        if (Math.abs(newOffset - lastOffset) > 0.5) {
          setOffset(newOffset);
          lastOffset = newOffset;
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [speed]);

  return { ref, offset };
}
