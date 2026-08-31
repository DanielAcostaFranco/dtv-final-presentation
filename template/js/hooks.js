/* Shared React hooks. Loaded first, so these globals are available
   to every other script (classic top-level const is shared across
   <script> tags via the global lexical scope). */
const { useState, useEffect, useRef, useCallback } = React;

/* ============================================================
   HOOK: useReveal
   Adds `is-visible` when the element scrolls into view (once).
   ============================================================ */
function useReveal(options = {}) {
  const { repeat = false, ...observerOptions } = options;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(entry.target); // reveal once
        } else if (repeat) {
          setVisible(false); // re-arm so it animates again next time
        }
      },
      { threshold: 0.15, ...observerOptions }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* ============================================================
   HOOK: useScrollZoom
   Returns a 0→1 progress as the user scrolls through a tall section.
   ============================================================ */
function useScrollZoom(id) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const scrolled = -el.getBoundingClientRect().top;
      const available = el.offsetHeight - window.innerHeight;
      setProgress(Math.max(0, Math.min(1, scrolled / available)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [id]);
  return progress;
}
