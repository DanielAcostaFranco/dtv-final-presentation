/* ============================================================
   COMPONENT: Reveal
   Wraps any content and animates it in on scroll.
   `delay` (ms) lets you stagger multiple items.
   ============================================================ */
function Reveal({ children, delay = 0, as: Tag = "div", className = "", repeat = false, threshold }) {
  const [ref, visible] = useReveal({ repeat, ...(threshold != null ? { threshold } : {}) });
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ============================================================
   COMPONENT: Section  (the reusable building block)
   Duplicate <Section> to add as many sections as you need.
   props:
     id       -> anchor + nav dot target
     eyebrow  -> small label above the title
     title    -> big heading
     variant  -> "" | "alt" | "dark"
     hero / closing -> layout flags
   ============================================================ */
function Section({ id, eyebrow, title, children, variant = "", hero, closing }) {
  const cls = [
    "section",
    variant && `section--${variant}`,
    hero && "hero",
    closing && "closing",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={cls} data-section>
      <div className="inner">
        {eyebrow && <Reveal className="eyebrow" as="p">{eyebrow}</Reveal>}
        {title && (
          <Reveal delay={80}>
            <h2 className="title">{title}</h2>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/* ============================================================
   SMALL PIECES
   ============================================================ */
function StatCard({ num, label, hint, delay }) {
  return (
    <Reveal className="stat" delay={delay}>
      <div className="num">{num}</div>
      <div className="label">{label}</div>
      {hint && <div className="hint">{hint}</div>}
    </Reveal>
  );
}

/* Grid of number stats. Pass data only; the map + stagger live here.
   items: [{ num, label, hint? }]  — step: ms between each card. */
function StatGrid({ items, step = 60 }) {
  return (
    <div className="stats">
      {items.map((s, i) => (
        <StatCard key={i} {...s} delay={i * step} />
      ))}
    </div>
  );
}

function CompareRow({ metric, before, after, delay }) {
  return (
    <Reveal className="compare__row" delay={delay}>
      <div className="compare__metric">{metric}</div>
      <div className="compare__before">{before}</div>
      <div className="compare__after">{after}</div>
    </Reveal>
  );
}

/* Comparison table. Pass data only; the header + row map live here.
   heads: [col1, col2, col3]  rows: [[metric, before, after], ...]
   step: ms of stagger between rows. */
function CompareTable({ heads = ["Aspect", "Before", "Now"], rows, step = 70 }) {
  return (
    <div className="compare compare--three">
      <div className="compare__head">
        {heads.map((h, i) => <span key={i}>{h}</span>)}
      </div>
      {rows.map(([metric, before, after], i) => (
        <CompareRow key={i} metric={metric} before={before} after={after} delay={i * step} />
      ))}
    </div>
  );
}

function InfoCard({ k, v, delay }) {
  return (
    <Reveal className="info-card" delay={delay}>
      <div className="k">{k}</div>
      <div className="v">{v}</div>
    </Reveal>
  );
}

/* A browser-frame placeholder for screenshots.
   Replace the inner text with <img src="..." /> when you have images. */
function MockBrowser({ url, children, className = "" }) {
  return (
    <Reveal className={`mock ${className}`} delay={120}>
      <div className="mock__bar">
        <i className="r"></i><i className="y"></i><i className="g"></i>
        <span className="mock__url">{url}</span>
      </div>
      <div className="mock__body">{children}</div>
    </Reveal>
  );
}

/* ============================================================
   COMPONENT: ZoomStage
   A tall section whose sticky frame scales from small -> big
   as you scroll through it. Sets a --p (0..1) CSS var on the
   sticky wrapper so the header can fade out and the pointers
   can fade in. `startWidth` (px) = the rendered width at the
   start, so it can match another element (e.g. the Old mock).
   ============================================================ */
function ZoomStage({ children, header, startWidth = 560, height = "260vh" }) {
  const stageRef = useRef(null);
  const stickyRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const sticky = stickyRef.current;
    const frame = frameRef.current;
    if (!stage || !sticky || !frame) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const total = stage.offsetHeight - window.innerHeight;
      const scrolled = -stage.getBoundingClientRect().top;
      const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      // start scale so the frame renders at `startWidth`; ends at full size.
      const base = frame.offsetWidth || 1;
      const startScale = Math.min(1, startWidth / base);
      const scale = startScale + (1 - startScale) * p;
      frame.style.transform = `scale(${scale.toFixed(4)})`;
      sticky.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [startWidth]);

  return (
    <div className="zoom-stage" ref={stageRef} style={{ height }}>
      <div className="zoom-sticky" ref={stickyRef}>
        {header && <div className="zoom-head">{header}</div>}
        <div className="showcase-frame zoom-frame" ref={frameRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENT: AboutSlideshow
   Two-slot grid that auto-cycles through images/videos.
   items: [{ src, type }]  — type "video" or omit for image.
   interval: ms between advances (default 4000).
   ============================================================ */
function AboutSlideshow({ items, photoDuration = 4000, videoDuration = 12000 }) {
  /* double buffer: two persistent layers (A/B) ping-pong so the VISIBLE
     media never remounts — the hidden layer loads the next pair, then we flip. */
  const [bufA, setBufA] = useState(0);      /* pair index in buffer A */
  const [bufB, setBufB] = useState(null);   /* pair index in buffer B (null until first use) */
  const [showB, setShowB] = useState(false);/* which buffer is on top / visible */
  const readyRef = useRef(0);
  const transitioningRef = useRef(false);

  const visiblePair = showB ? bufB : bufA;

  useEffect(() => {
    if (!items || items.length === 0) return;
    const item = items[(visiblePair ?? 0) % items.length];
    const duration = item.type === "video" ? videoDuration : photoDuration;
    const t = setTimeout(() => {
      const target = ((visiblePair ?? 0) + 2) % items.length;
      readyRef.current = 0;
      transitioningRef.current = true;
      if (showB) setBufA(target); else setBufB(target); /* load into hidden buffer */
    }, duration);
    return () => clearTimeout(t);
  }, [visiblePair, showB, items.length, photoDuration, videoDuration]);

  /* fired by hidden-buffer media on load; flip once both are ready */
  const onReady = () => {
    if (!transitioningRef.current) return;
    readyRef.current += 1;
    if (readyRef.current >= 2) {
      transitioningRef.current = false;
      requestAnimationFrame(() => requestAnimationFrame(() => setShowB(s => !s)));
    }
  };

  const renderMedia = (item, onLoadCb) => item.type === "video"
    ? <video src={item.src} autoPlay muted loop playsInline onLoadedData={onLoadCb} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    : <img src={item.src} alt="" onLoad={onLoadCb} style={{ width: "100%", height: "100%", objectFit: "cover", ...item.style }} />;

  /* renders the two slots (main + secondary) for one buffer */
  const renderBuffer = (pairIdx, visible) => {
    if (pairIdx === null) return null;
    const a = items[pairIdx % items.length];
    const b = items[(pairIdx + 1) % items.length];
    const cb = visible ? undefined : onReady;   /* only the hidden buffer reports readiness */
    const layer = { opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" };
    return (
      <React.Fragment>
        <div className="about-photo about-photo--main" style={layer}>{renderMedia(a, cb)}</div>
        <div className="about-photo about-photo--secondary" style={layer}>{renderMedia(b, cb)}</div>
      </React.Fragment>
    );
  };

  return (
    <div className="about-photos">
      {(!items || items.length === 0)
        ? <div className="about-photo about-photo--main about-photo--empty">Add your photos in js/pictures.js</div>
        : <>
            {renderBuffer(bufA, !showB)}
            {renderBuffer(bufB, showB)}
          </>}
    </div>
  );
}

/* ============================================================
   COMPONENT: PhotoStrip
   Infinite auto-scrolling photo strip (CSS animation, no timers).
   Duplicates the list so the loop is seamless.
   ============================================================ */
function PhotoStrip({ photos = [], speed = 40, placeholderCount = 5 }) {
  /* speed = seconds to traverse one full copy of the strip */
  const shownPhotos = photos.length
    ? photos
    : Array.from({ length: placeholderCount }, (_, i) => ({ caption: `Caption ${i + 1}` }));
  const items = [...shownPhotos, ...shownPhotos]; /* duplicate for seamless loop */
  return (
    <Reveal className="strip-wrap" delay={160}>
      <div
        className="strip-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((p, i) => (
          <div className="strip-item" key={i}>
            {p.type === "video"
              ? <video autoPlay muted loop playsInline className="strip-video">
                  <source src={p.src} type="video/mp4" />
                </video>
              : p.src
                ? <img src={p.src} alt={p.caption || `Photo ${i + 1}`} style={p.position ? { objectPosition: p.position } : undefined} />
                : <div className="strip-placeholder">Photo {(i % shownPhotos.length) + 1}</div>
            }
            {p.caption && <span className="strip-caption">{p.caption}</span>}
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/* ============================================================
   COMPONENT: PillarGrid
   Four cards (icon + title + one line). Each card is a <Reveal>
   with a staggered delay (i*100ms). Hover lifts the card.
   pillars: [{ icon, title, desc }]
   ============================================================ */
function PillarGrid({ pillars }) {
  return (
    <div className="pillar-grid">
      {pillars.map((p, i) => (
        <Reveal className="pillar-card" key={i} delay={i * 100}>
          <div className="pillar-card__num">{i + 1}</div>
          <div className="pillar-card__icon">{p.icon}</div>
          <div className="pillar-card__title">{p.title}</div>
          <div className="pillar-card__desc">{p.desc}</div>
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================
   COMPONENT: FeatureCard
   Icon + title + short description + optional screenshot inside
   a mini MockBrowser. When `img` is missing, shows a placeholder.
   ============================================================ */
function FeatureCard({ icon, title, desc, img, url, problem, did, impact }) {
  return (
    <div className="feature-card">
      <div className="feature-card__head">
        <span className="feature-card__icon">{icon}</span>
        <span className="feature-card__title">{title}</span>
      </div>
      {desc && <p className="feature-card__desc">{desc}</p>}
      {(problem || did || impact) && (
        <dl className="feature-card__detail">
          {problem && (<><dt>Problem</dt><dd>{problem}</dd></>)}
          {did && (<><dt>What I did</dt><dd>{did}</dd></>)}
          {impact && (<><dt>Impact</dt><dd>{impact}</dd></>)}
        </dl>
      )}
      {img && (
        <div className="mock mock--mini feature-card__shot">
          <div className="mock__bar">
            <i className="r"></i><i className="y"></i><i className="g"></i>
            {url && <span className="mock__url">{url}</span>}
          </div>
          <div className="mock__body">
            <img src={img} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   COMPONENT: FeatureGrid
   Responsive 2–3 column grid of FeatureCards; each wrapped in a
   <Reveal> with a staggered delay (i*90ms).
   items: [{ icon, title, desc, img, url }]
   ============================================================ */
function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 90}>
          <FeatureCard {...it} />
        </Reveal>
      ))}
    </div>
  );
}

/* ============================================================
   COMPONENT: SplitList
   Two columns, each with a title + checkmark list. Each <li> is a
   <Reveal as="li"> with a staggered delay (i*80ms).
   left / right: { title, items: [...] }
   ============================================================ */
function SplitList({ left, right, third, fourth, fifth, sixth, seventh }) {
  const renderCol = (col) => (
    <div className="split-col">
      <h3 className="split-col__title">{col.title}</h3>
      <ul className="split-list">
        {col.items.map((t, i) => (
          <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="split">
      {renderCol(left)}
      {renderCol(right)}
      {third && renderCol(third)}
      {fourth && renderCol(fourth)}
      {fifth && renderCol(fifth)}
      {sixth && renderCol(sixth)}
    </div>
  );
}


