/* ============================================================
   CHROME: progress bar + nav dots
   ============================================================ */

function Streaks() {
  /* SVG wavy brush strokes — each path animates stroke-dashoffset to travel across */
  return (
    <svg className="streaks-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {/* wide S-curve — stays near top */}
      <path className="stroke stroke--1"
        d="M -200,120 C 200,60 450,200 750,100 S 1200,20 1800,90" />
      {/* wavy ribbon — hugs bottom */}
      <path className="stroke stroke--2"
        d="M -100,810 C 150,770 340,850 580,800 C 780,760 940,830 1150,790 C 1360,750 1520,820 1780,790" />
      {/* tight arcs — upper area */}
      <path className="stroke stroke--3"
        d="M 0,170 C 220,110 390,260 600,160 C 800,70 940,200 1180,130 C 1340,80 1460,160 1700,110" />
      {/* low swoosh — near bottom edge */}
      <path className="stroke stroke--4"
        d="M -80,860 C 200,820 440,870 720,840 C 940,815 1120,860 1400,830 L 1760,820" />
      {/* short zigzag — very top */}
      <path className="stroke stroke--5"
        d="M 200,40 C 360,10 450,80 580,30 C 700,-10 800,60 940,20 C 1040,-10 1130,50 1300,15" />
    </svg>
  );
}

function Logo({ ids }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Drive the logo off the slide's variant: variant="dark" adds `section--dark`.
          if (e.isIntersecting) setDark(e.target.classList.contains("section--dark"));
        });
      },
      { threshold: 0.5 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return (
    <img
      src={dark ? "assets/logo_white.png" : "assets/250px-Cummins_logo.svg.webp"}
      alt="Cummins"
      className="site-logo"
    />
  );
}

function ProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setW(scrolled);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress" style={{ width: `${w}%` }} />;
}

function NavDots({ ids }) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.5 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return (
    <nav className="dots" aria-label="Section navigation">
      {ids.map((id) => (
        <button
          key={id}
          className={active === id ? "active" : ""}
          aria-label={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
        />
      ))}
    </nav>
  );
}

