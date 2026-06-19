import { useEffect, useRef } from "react";

export function MagmaticCursor({ disabled }) {
  const dotRef   = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    if (disabled) return;

    const dot    = dotRef.current;
    const ripple = rippleRef.current;
    if (!dot || !ripple) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => {
      dot.style.transform    = `translate(${e.clientX}px, ${e.clientY}px)`;
      ripple.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [role='button'], input, textarea, select");
      dot.classList.toggle("cursor-hover", !!interactive);
    };

    const onClick = (e) => {
      // restart ripple animation
      ripple.classList.remove("cursor-ripple--active");
      void ripple.offsetWidth; // reflow
      ripple.classList.add("cursor-ripple--active");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("click",     onClick);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("click",     onClick);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <>
      {/* Ripple on click */}
      <div ref={rippleRef} className="cursor-ripple" />
      {/* Dot */}
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
