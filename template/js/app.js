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
     9. photos    — light slide with an auto-scrolling PhotoStrip
    10. closing   — dark closing slide

   Copy any <Section> block to build your own deck. The nav dots,
   keyboard nav and logo read the section ids straight from the DOM
   (via useSectionIds), so there's no SECTION_IDS list to keep in sync.
   ============================================================ */
function App() {
  const SECTION_IDS = useSectionIds();
  useKeyboardNav(SECTION_IDS);

  return (
    <>
      <ProgressBar />
      <NavDots ids={SECTION_IDS} />
      <Logo ids={SECTION_IDS} />
      <Streaks />

      {/* 1 — HERO (light title slide) — uses: <Section hero> + <Reveal> */}
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

      {/* 2 — TEXT ONLY (light slide, no cards) — uses: <Section> + <Reveal> */}
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

      {/* 3 — CARDS (light slide with a grid of cards) — uses: <FeatureGrid> (-> <FeatureCard>) */}
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

      {/* 4 — DARK (dark slide with a comparison table) — uses: <CompareTable> */}
      <Section id="dark" variant="dark" eyebrow="Dark slide" title="A dark slide with a table">
        <p className="lead">Dark background, great for before/after comparisons.</p>
        <CompareTable
          heads={["Aspect", "Before", "Now"]}
          rows={[
            ["Aspect one", "Old approach", "New approach"],
            ["Aspect two", "Old approach", "New approach"],
            ["Aspect three", "Old approach", "New approach"],
            ["Aspect four", "Old approach", "New approach"],
          ]}
        />
      </Section>

      {/* 5 — STATS (light slide with number stats) — uses: <StatGrid> */}
      <Section id="stats" variant="alt" eyebrow="Stats slide" title="Big numbers">
        <StatGrid items={[
          { num: "00", label: "Metric one", hint: "Optional hint text." },
          { num: "00", label: "Metric two", hint: "Optional hint text." },
          { num: "~00k", label: "Metric three" },
          { num: "~000", label: "Metric four" },
        ]} />
      </Section>

      {/* 6 — PILLARS (light slide with a 4-up grid) — uses: <PillarGrid> */}
      <Section id="pillars" eyebrow="Pillars slide" title="Four-up pillar grid">
        <PillarGrid pillars={[
          { icon: "🔄", title: "Pillar One", desc: "Short description." },
          { icon: "✨", title: "Pillar Two", desc: "Short description." },
          { icon: "🤖", title: "Pillar Three", desc: "Short description." },
          { icon: "📚", title: "Pillar Four", desc: "Short description." },
        ]} />
      </Section>

      {/* 7 — SPLIT (light slide with multi-column lists) — uses: <SplitList> */}
      <Section id="split" variant="alt" eyebrow="Split slide" title="Multi-column lists">
        <SplitList
          left={{ title: "Column One", items: ["List item", "List item", "List item"] }}
          right={{ title: "Column Two", items: ["List item", "List item", "List item"] }}
          third={{ title: "Column Three", items: ["List item", "List item"] }}
          fourth={{ title: "Column Four", items: ["List item", "List item", "List item"] }}
          fifth={{ title: "Column Five", items: ["List item", "List item", "List item"] }}
          sixth={{ title: "Column Six", items: ["List item", "List item", "List item"] }}
          seventh={{ title: "Column Seven", items: ["List item", "List item", "List item"] }}
        />
      </Section>

      {/* 8 — MOCK (light slide with a browser mockup) — uses: <MockBrowser> */}
      <Section id="mock" variant="alt" eyebrow="Screenshot slide" title="Browser mockup">
        <div className="before-split">
          <ul className="before-words">
            {["Fast", "Modern", "Reliable"].map((w, i) => (
              <Reveal as="li" key={i} delay={i * 120}>{w}</Reveal>
            ))}
          </ul>
          <MockBrowser url="https://www.cummins.com/">
            {/* Replace with your image: <img src="assets/screenshot.png" alt="UI" /> */}
            <span>Your screenshot here</span>
          </MockBrowser>
        </div>
      </Section>

      {/* 9 — PHOTOS (light slide, auto-scrolling strip) — uses: <PhotoStrip> */}
      <Section id="photos" eyebrow="Photos slide" title="An auto-scrolling photo strip">
        <PhotoStrip photos={MEETING_PICTURES} />
      </Section>

      {/* 10 — CLOSING (dark closing slide) — uses: <Section closing> + <Reveal> */}
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
