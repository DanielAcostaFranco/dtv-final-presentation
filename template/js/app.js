/* ============================================================
   APP — TEMPLATE SHOWCASE
   A short deck that demonstrates the building blocks you can
   mix and match. Each <Section> below shows one "type" of slide:

     1. hero      — hero title slide (light)
     2. text      — light slide, no cards (eyebrow + title + lead)
     3. cards     — light slide with cards (FeatureGrid)
     4. dark      — dark slide with a comparison table
     5. stats     — light slide with number stats (StatCard)
     6. pillars   — light slide with the 4-up PillarGrid
     7. split     — light slide with multi-column SplitList
     8. mock      — light slide with a browser mockup screenshot
     9. closing   — dark closing slide

   Copy any <Section> block to build your own deck, and keep
   SECTION_IDS in sync with the ids you use.
   ============================================================ */
const SECTION_IDS = [
  "hero", "text", "cards", "dark", "stats", "pillars", "split", "mock", "closing",
];

function App() {
  useKeyboardNav(SECTION_IDS);

  return (
    <>
      <ProgressBar />
      <NavDots ids={SECTION_IDS} />
      <Logo ids={SECTION_IDS} />
      <Streaks />

      {/* 1 — HERO (light title slide) */}
      <Section id="hero" hero>
        <Reveal delay={80}>
          <h1 className="title">Project Title<br/>Subtitle Goes Here</h1>
        </Reveal>
        <Reveal delay={320}>
          <p className="lead" style={{ margin: "12px auto 0", color: "#a1a1a6" }}>
            Your Name
          </p>
        </Reveal>
      </Section>

      {/* 2 — TEXT ONLY (light slide, no cards) */}
      <Section id="text" eyebrow="Text slide" title="A slide with just a paragraph">
        <Reveal delay={100}>
          <p className="project-sub">
            Use this for a one-line highlight statement.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="lead">
            A longer paragraph for context. Wrap the important bits in
            <strong> bold</strong> to guide the eye. Good for intros, problem
            statements, or a project overview.
          </p>
        </Reveal>
      </Section>

      {/* 3 — CARDS (light slide with a grid of cards) */}
      <Section id="cards" variant="alt" eyebrow="Cards slide" title="A grid of feature cards">
        <FeatureGrid items={[
          { icon: "🗺️", title: "Card One",
            problem: "The problem this card describes.",
            did: "What was done about it.",
            impact: "The result or impact." },
          { icon: "📝", title: "Card Two",
            problem: "The problem this card describes.",
            did: "What was done about it.",
            impact: "The result or impact." },
          { icon: "🔍", title: "Card Three",
            problem: "The problem this card describes.",
            did: "What was done about it.",
            impact: "The result or impact." },
        ]} />
      </Section>

      {/* 4 — DARK (dark slide with a comparison table) */}
      <Section id="dark" variant="dark" eyebrow="Dark slide" title="A dark slide with a table">
        <p className="lead">Dark background, great for before/after comparisons.</p>
        <div className="compare compare--three">
          <div className="compare__head">
            <span>Aspect</span><span>Before</span><span>Now</span>
          </div>
          {[
            ["Aspect one", "Old approach", "New approach"],
            ["Aspect two", "Old approach", "New approach"],
            ["Aspect three", "Old approach", "New approach"],
          ].map(([metric, before, after], i) => (
            <CompareRow key={i} metric={metric} before={before} after={after} delay={i * 70} />
          ))}
        </div>
      </Section>

      {/* 5 — STATS (light slide with number stats) */}
      <Section id="stats" variant="alt" eyebrow="Stats slide" title="Big numbers">
        <div className="stats">
          <StatCard num="00" label="Metric one" hint="Optional hint text." delay={0} />
          <StatCard num="00" label="Metric two" hint="Optional hint text." delay={60} />
          <StatCard num="~00k" label="Metric three" delay={120} />
          <StatCard num="~000" label="Metric four" delay={180} />
        </div>
      </Section>

      {/* 6 — PILLARS (light slide with a 4-up grid) */}
      <Section id="pillars" eyebrow="Pillars slide" title="Four-up pillar grid">
        <PillarGrid pillars={[
          { icon: "🔄", title: "Pillar One", desc: "Short description." },
          { icon: "✨", title: "Pillar Two", desc: "Short description." },
          { icon: "🤖", title: "Pillar Three", desc: "Short description." },
          { icon: "📚", title: "Pillar Four", desc: "Short description." },
        ]} />
      </Section>

      {/* 7 — SPLIT (light slide with multi-column lists) */}
      <Section id="split" variant="alt" eyebrow="Split slide" title="Multi-column lists">
        <SplitList
          left={{ title: "Column One", items: ["List item", "List item", "List item"] }}
          right={{ title: "Column Two", items: ["List item", "List item", "List item"] }}
          third={{ title: "Column Three", items: ["List item", "List item"] }}
          fourth={{ title: "Column Four", items: ["List item", "List item", "List item"] }}
        />
      </Section>

      {/* 8 — MOCK (light slide with a browser mockup) */}
      <Section id="mock" variant="alt" eyebrow="Screenshot slide" title="Browser mockup">
        <div className="before-split">
          <ul className="before-words">
            <Reveal as="li" delay={0}>Fast</Reveal>
            <Reveal as="li" delay={120}>Modern</Reveal>
            <Reveal as="li" delay={240}>Reliable</Reveal>
          </ul>
          <MockBrowser url="app.example.com">
            {/* Replace with your image: <img src="assets/screenshot.png" alt="UI" /> */}
            <span>Your screenshot here</span>
          </MockBrowser>
        </div>
      </Section>

      {/* 9 — CLOSING (dark closing slide) */}
      <Section id="closing" closing variant="dark">
        <Reveal><p className="eyebrow">Closing slide</p></Reveal>
        <Reveal delay={180}>
          <h2 className="closing__title">Thank You</h2>
        </Reveal>
        <Reveal delay={420}>
          <p className="lead" style={{ margin: "24px auto 0", color: "#a1a1a6" }}>
            Questions welcome.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
