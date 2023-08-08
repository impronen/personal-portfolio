import { useRef } from "react";

export function useScrollToSection() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return [sectionRef, scrollToSection];
}
