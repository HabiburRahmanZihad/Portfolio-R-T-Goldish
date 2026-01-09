import React, { useEffect, useRef, useState, memo } from "react";

const CustomCursor = memo(() => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoverText, setHoverText] = useState("");

  // Use refs to track hover state without causing re-renders during animation
  const hoverStateRef = useRef(false);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check hover state on every mouse move for smoother detection
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const interactiveElement = target?.closest('a, button, [data-cursor], input, textarea, [role="button"]');

      if (interactiveElement) {
        // Clear any pending unhover timeout
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }

        if (!hoverStateRef.current) {
          hoverStateRef.current = true;
          setIsHovering(true);
          setHoverText(interactiveElement.dataset?.cursor || "");
        }
      } else {
        // Add a tiny delay before removing hover to prevent flickering
        if (hoverStateRef.current && !hoverTimeoutRef.current) {
          hoverTimeoutRef.current = setTimeout(() => {
            hoverStateRef.current = false;
            setIsHovering(false);
            setHoverText("");
            hoverTimeoutRef.current = null;
          }, 50);
        }
      }
    };

    const animate = () => {
      // Dot follows instantly with slight smoothing
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      // Ring follows with more delay for trailing effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        @media (min-width: 1024px) {
          * { cursor: none !important; }
        }
      `}</style>

      {/* Outer Ring - Magnetic effect */}
      <div
        ref={ringRef}
        className={`
          fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center
          transition-[width,height,opacity] duration-200 ease-out
          ${isHidden ? "opacity-0" : "opacity-100"}
        `}
        style={{
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
        }}
      >
        <div
          className={`
            w-full h-full rounded-full border-[1.5px]
            transition-all duration-200
            ${isHovering
              ? "border-primary bg-primary/10 scale-100"
              : "border-primary/60 scale-100"
            }
            ${isClicking ? "scale-90 border-primary bg-primary/20" : ""}
          `}
        />
        {/* Hover text */}
        {hoverText && isHovering && (
          <span className="absolute text-[10px] font-bold uppercase tracking-wider text-primary">
            {hoverText}
          </span>
        )}
      </div>

      {/* Inner Dot - Precise pointer */}
      <div
        ref={dotRef}
        className={`
          fixed top-0 left-0 pointer-events-none z-[10000] hidden lg:block
          transition-[opacity,transform] duration-150 ease-out
          ${isHidden ? "opacity-0" : "opacity-100"}
          ${isHovering ? "opacity-0 scale-0" : "opacity-100 scale-100"}
          ${isClicking ? "scale-150" : ""}
          bg-primary
        `}
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          boxShadow: "0 0 15px var(--color-primary), 0 0 30px var(--color-primary)",
        }}
      />
    </>
  );
});

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;