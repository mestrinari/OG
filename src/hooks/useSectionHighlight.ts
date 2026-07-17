import { useEffect, useRef, useState } from "react";

export function useSectionHighlight(duration = 5000) {
  const [highlightedId, setHighlightedId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<number>(0);

  useEffect(() => () => {
    clearTimeout(timeoutRef.current);
    observerRef.current?.disconnect();
  }, []);

  const highlightSection = (id: string) => {
    setHighlightedId("");
    clearTimeout(timeoutRef.current);
    observerRef.current?.disconnect();

    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHighlightedId(id);
      observerRef.current?.disconnect();
      timeoutRef.current = window.setTimeout(() => setHighlightedId(""), duration);
    });
    observerRef.current.observe(element);
  };

  return { highlightedId, highlightSection };
}
