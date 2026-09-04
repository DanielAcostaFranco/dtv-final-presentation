/* Shared React hooks. Loaded first, so these globals are available
   to every other script (classic top-level const is shared across
   <script> tags via the global lexical scope). */
const { useState, useEffect, useRef } = React;

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
   HOOK: useSectionIds
   Reads the <Section> ids straight from the DOM (in document
   order) via their `data-section` attribute. Nav dots, keyboard
   nav and the logo stay in sync automatically when you reorder
   or add sections — no hand-written SECTION_IDS list to maintain.
   ============================================================ */
function useSectionIds() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const read = () => {
      const found = Array.from(document.querySelectorAll("[data-section]"))
        .map((el) => el.id)
        .filter(Boolean);
      // Only update state when the list actually changed (avoids re-render loops).
      setIds((prev) =>
        prev.length === found.length && prev.every((v, i) => v === found[i])
          ? prev
          : found
      );
    };

    read();
    const root = document.getElementById("root");
    const observer = new MutationObserver(read); // re-read if sections are added/removed
    if (root) observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return ids;
}

