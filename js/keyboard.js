/* ============================================================
   HOOK: useKeyboardNav
   Slide-deck style keyboard navigation.
   Works with scroll "stops" (target scrollY positions) instead
   of section indices, so a tall scroll-zoom section can add an
   extra stop and be stepped THROUGH (small -> big) with the keys.
   ============================================================ */
function useKeyboardNav(ids) {
    useEffect(() => {
        // Build the sorted list of scroll targets.
        const getStops = () => {
            const stops = [];
            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                const top = window.scrollY + el.getBoundingClientRect().top;
                stops.push(top);
                // A zoom section gets an extra stop at the end of its runway (fully zoomed).
                const stage = el.querySelector(".zoom-stage");
                if (stage) {
                    const end =
                        window.scrollY +
                        stage.getBoundingClientRect().top +
                        stage.offsetHeight -
                        window.innerHeight;
                    stops.push(end);
                }
            });
            return stops.sort((a, b) => a - b);
        };

        const goDelta = (dir) => {
            const stops = getStops();
            const y = window.scrollY;
            const eps = 6;
            let target;
            if (dir > 0) {
                target = stops.find((s) => s > y + eps);
            } else {
                const before = stops.filter((s) => s < y - eps);
                target = before[before.length - 1];
            }
            if (target == null) target = dir > 0 ? stops[stops.length - 1] : stops[0];
            window.scrollTo({ top: Math.round(target), behavior: "smooth" });
        };

        const onKey = (e) => {
            const next = ["ArrowDown", "ArrowRight", "PageDown", "Enter", " "];
            const prev = ["ArrowUp", "ArrowLeft", "PageUp"];

            if (next.includes(e.key)) {
                e.preventDefault();
                goDelta(1);
            } else if (prev.includes(e.key)) {
                e.preventDefault();
                goDelta(-1);
            } else if (e.key === "Home") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (e.key === "End") {
                e.preventDefault();
                document.getElementById(ids[ids.length - 1])?.scrollIntoView({ behavior: "smooth" });
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);  // cleanup: evita listeners duplicados

    }, [ids]);
}