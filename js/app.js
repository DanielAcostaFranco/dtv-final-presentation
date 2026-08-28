/* ============================================================
   APP  — 10 sections, all driven by <Section>.
   Edit the content freely; add/remove <Section> blocks
   and keep SECTION_IDS in sync for the nav dots.
   ============================================================ */
const SECTION_IDS = [
  "hero", "about", "project", "oldway", "newway", "problems", "before", "after",
  "mission", "migration", "accomplishments", "features",
  "f-modelmap", "f-notes", "f-search", "f-hub", "f-import",
  "ai", "support", "comparison", "lessons", "aboutMore", "closing",
];

function App() {
  useKeyboardNav(SECTION_IDS);

  return (
    <>
      <ProgressBar />
      <NavDots ids={SECTION_IDS} />
      <PillarStepper ids={SECTION_IDS} />
      <Logo ids={SECTION_IDS} />
      <Streaks />

      {/* 1 — HERO */}
      <Section id="hero" hero>
        <Reveal delay={80}>
          <h1 className="title">Design to Value<br/>Migration to React</h1>
        </Reveal>

        <Reveal delay={320}>
          <p className="lead" style={{ margin: "12px auto 0", color: "#a1a1a6" }}>
            Daniel Acosta
          </p>
        </Reveal>
      </Section>

      {/* 2 — ABOUT ME */}
      <Section id="about" variant="alt" eyebrow="About Me" title="Daniel Acosta">
        <div className="about-split">
          <Reveal className="about-split__left" delay={80}>
            <div className="info-grid">
              <InfoCard k="School" v="Brigham Young University – Idaho" delay={0} />
              <InfoCard k="Degree" v="B.S. Software Engineering" delay={60} />
              <InfoCard k="Expected Graduation" v="December 2026" delay={120} />
              <InfoCard k="Role" v="Technical IS Engineering Co-Op, Front End Developer" delay={180} />
              <InfoCard k="Group" v="H1 Global Design Simulation & Analytics, PSBU" delay={240} />
              <InfoCard k="Manager" v="Benjamin Yeh" delay={300} />
            </div>
          </Reveal>
          <Reveal className="about-split__right" delay={200}>
            <div className="about-right-rail">
              {/* Replace src values with your image paths, e.g. "pictures/Image (1).jpg" */}
              <AboutSlideshow photoDuration={8000} videoDuration={12000} items={[
                { src: "pictures/260120_DanielAcosta_HK_002.jpg" },
                { src: "pictures/IMG_9013.JPG", style: { transform: "scale(1.5)", transformOrigin: "35% 80%", width: "100%", height: "100%", objectFit: "cover" } },
                { src: "pictures/802C0F5C-8ADD-4902-98A0-071FC2575996.MOV", type: "video" },
                { src: "pictures/IMG_0424.mov", type: "video" },
                { src: "pictures/IMG_1045.MOV", type: "video" },
                { src: "pictures/IMG_2289.MOV", type: "video" },
                { src: "pictures/CLASICO_GS_06042023.mov", type: "video" },
                { src: "pictures/IMG_2405.MOV", type: "video" },
              ]} />

              <div className="about-side-cards">
                <div className="info-card about-side-card">
                  <div className="k">From</div>
                  <div className="v">Campeche, Mexico</div>
                </div>
                <div className="info-card about-side-card">
                  <div className="k">Hobbies</div>
                  <div className="v">Family, Soccer, Sports, Guitar</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3 — PROJECT OVERVIEW */}
      <Section id="project" eyebrow="The Project" title="What is Design to Value?">
        <Reveal delay={120}>
          <p className="lead">
            Design to Value is a decision simulator for PSBU. It lets teams test
            different ways to design a product (architecture, components,
            technology) and instantly see which option creates the most
            business value, before a single dollar is spent.
          </p>
        </Reveal>
      </Section>

      {/* 3a — THE OLD WAY (intentionally vintage look) */}
      <Section id="oldway" variant="old" eyebrow="The old way" title="Before Design to Value">
        <div className="oldway">
          <div className="oldway__stamp">Circa 2023</div>
          <Reveal delay={100}>
            <p className="oldway__text">
              Marketing, finance, and engineering spent a lot of time
              piecing together assumptions. Spreadsheets, emails, and
              meetings, all trying to guess what would be best to build and how
              to turn it into a profitable product.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="oldway__list">
              <li>Endless spreadsheets and email threads</li>
              <li>Delays and thin margins</li>
              <li>Too many people in the loop</li>
              <li>Information scattered and hard to connect</li>
            </ul>
          </Reveal>
          <Reveal delay={340}>
            <p className="oldway__sign">Slow, manual, and error-prone.</p>
          </Reveal>
        </div>
      </Section>

      {/* 3b — THE FIRST DTV (early Streamlit version) */}
      <Section id="newway" variant="dark" eyebrow="The first version" title="Then Design to Value arrived">
        <div className="newway">
          <Reveal delay={100}>
            <p className="lead" style={{ textAlign: "center" }}>
              Built in Streamlit, the first version already turned that slow guesswork into fast, data-driven decisions.
            </p>
          </Reveal>
          <div className="newway__cards">
            {[
              { icon: "⚡", title: "Simulations in minutes", desc: "Model different product designs and see the results in minutes instead of weeks." },
              { icon: "📊", title: "Clear visual results", desc: "Charts and tables that turned raw numbers into something easy to compare." },
              { icon: "💡", title: "Confident investment decisions", desc: "Choose the option that creates the most business value." },
            ].map((c, i) => (
              <Reveal key={i} delay={160 + i * 90}>
                <div className="newway__card">
                  <div className="newway__icon">{c.icon}</div>
                  <div className="newway__title">{c.title}</div>
                  <p className="newway__desc">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 4 — PROBLEMS WE TACKLED (the purpose of the migration) */}
      <Section id="problems" eyebrow="Why migrate" title="Problems we tackled">
        <div className="feature-grid">
          {[
            { title: "Slow & unstable", desc: "Streamlit reloaded the entire page on every click, so the tool felt slow, froze often, and made even simple edits take too long." },
            { title: "Outdated, rigid UI", desc: "The interface looked old-fashioned and gave little control over layout, which made it hard to build a clean, modern experience." },
            { title: "Easy to lose your work", desc: "An accidental refresh could erase unsaved progress, and users were losing up to 50% of their work with no safety net." },
            { title: "Hard to understand results", desc: "Users could see the output numbers but had no easy way to interpret what they meant or why they came out that way." },
            { title: "Steep learning curve", desc: "With little in-tool guidance or documentation, users had to lean on teammates just to build a model on their own." },
          ].map((it, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="feature-card">
                <div className="feature-card__head">
                  <span className="feature-card__title">{it.title}</span>
                </div>
                <p className="feature-card__desc">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 — BEFORE */}
      <Section id="before" variant="alt" eyebrow="Before" title="The Old Experience">
        <div className="before-split">
          <ul className="before-words">
            <Reveal as="li" delay={0}>Slow</Reveal>
            <Reveal as="li" delay={120}>Rigid</Reveal>
            <Reveal as="li" delay={240}>Outdated</Reveal>
          </ul>
          <MockBrowser url="dtv-v2-...azure.databricksapps.com">
            <img src="assets/old.png" alt="Old DtV UI" />
          </MockBrowser>
        </div>
      </Section>

      {/* 7 — AFTER */}
      <Section id="after" variant="alt" eyebrow="After" title="The New Experience">
        <div className="before-split">
          <ul className="before-words">
            <Reveal as="li" delay={0}>Fast</Reveal>
            <Reveal as="li" delay={120}>Modern</Reveal>
            <Reveal as="li" delay={240}>Reliable</Reveal>
          </ul>
          <MockBrowser url="dtv-react-dev-...azure.databricksapps.com/analytics">
            <img src="assets/new.png" alt="New DtV UI" />
          </MockBrowser>
        </div>
      </Section>

      {/* 4 — MISSION (My contribution — four pillars) */}
      <Section id="mission" eyebrow="My contribution" title="What I worked on, across four pillars.">
        <PillarGrid pillars={[
          { icon: "🔄", title: "Old → New", desc: "Migration to React" },
          { icon: "✨", title: "New functionality", desc: "New Features" },
          { icon: "🤖", title: "AI", desc: "AI Integration in UI" },
          { icon: "📚", title: "Support & Data", desc: "Help and Support for User" },
        ]} />
      </Section>

      {/* 7 — PILLAR 1 (Migration + Foundation merged) */}
      <Section id="migration" variant="dark" eyebrow="Pillar 1 · From script to application" title="Not a port, a rebuild">
        <div className="impact">
          <div className="impact__head">
            <span>What we built</span><span>Impact</span>
          </div>
          {[
            ["Reusable components (forms, tables, dashboards, modals)", "Easier to modify and update in the future"],
            ["Brand-consistent design system", "Cummins-approved look, trust and reliability"],
            ["Responsive sidebar navigation", "Find any tab in seconds, less time lost"],
            ["Faster rendering & data visualization", "Quicker decisions, less waiting"],
            ["Automatic save to Databricks", "Never lose your work again"],
            ["Local-storage autosave + unsaved-changes warning", "Survives crashes, refreshes, and closed tabs"],
          ].map(([what, impact], i) => (
            <Reveal className="impact__row" key={i} delay={i * 80}>
              <span className="impact__what">{what}</span>
              <span className="impact__impact">{impact}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9 — ACCOMPLISHMENTS */}
      <Section id="accomplishments" variant="alt" eyebrow="By the Numbers" title="The work behind the change">
        <Reveal delay={80}>
          <p className="lead" style={{ textAlign: "center" }}>
            Five months of work, in numbers.
          </p>
        </Reveal>
        <div className="stats">
          <StatCard num="148" label="React Components (~39k LOC)" delay={0} />
          <StatCard num="20" label="Feature Modules · 30 Pages" hint="Self-contained parts of the app, like the Model Hub or Analytics." delay={60} />
          <StatCard num="36" label="Environment-based Feature Flags" hint="Switches to turn features on/off per environment (dev, prod)." delay={120} />
          <StatCard num="~$1K" label="Saved per user, every week" delay={180} />
        </div>
      </Section>

      {/* 10 — FEATURES (Pillar 2: new functionality) */}
      <Section id="features" variant="alt" eyebrow="Pillar 2 · Born from user feedback" title="Features that didn't exist before">
        <FeatureGrid items={[
          { icon: "🗺️", title: "Model Map", desc: "Visualize how volume streams link to sensitivities; validate before running.", img: "pictures/04-model-map-diagram.png" },
          { icon: "📝", title: "Notes", desc: "Leave notes right inside the model (Inputs, Model Map, Outputs).", img: "pictures/Notes.png" },
          { icon: "🔍", title: "Global Search", desc: "Jump to any input, output, or resource instantly.", img: "pictures/Global Search.png" },
          { icon: "🤖", title: "Knowledge AI Assistant", desc: "Ask anything about how DtV works, in plain language.", img: "pictures/Ai Assistant.png" },
          { icon: "📥", title: "Import Inputs from Template", desc: "Copy inputs from a template across products in one click. (Under Construction)", img: "pictures/Import Inputs.png" },
        ]} />
      </Section>

      {/* 10a — FEATURE DETAIL: Model Map (screenshot slide) */}
      <Section id="f-modelmap" eyebrow="New Feature · 1 of 5" title="Model Map">
        <Reveal delay={100}>
          <p className="lead problem">
            <span className="problem__tag">Problem:</span>
            Users couldn't see how volume streams connected to sensitivities, so mistakes only surfaced after a full run.
          </p>
        </Reveal>
        <div className="fdetail">
          <div className="fdetail__side fdetail__what">
            <div className="fdetail__label">What we did</div>
            <ul className="fdetail__list">
              {[
                "Visual map linking volume streams to sensitivities",
                "See the whole model structure at a glance",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
          <MockBrowser className="mock--lg" url="dtv-react-dev-...databricksapps.com/analytics/model-map">
            <img src="pictures/04-model-map-diagram.png" alt="Model Map" />
          </MockBrowser>
          <div className="fdetail__side fdetail__impact">
            <div className="fdetail__label">Impact</div>
            <ul className="fdetail__list">
              {[
                "Validate the model before running it",
                "Catch mistakes early, fewer bad runs",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 10b — FEATURE DETAIL: Notes */}
      <Section id="f-notes" variant="alt" eyebrow="New Feature · 2 of 5" title="Notes">
        <Reveal delay={100}>
          <p className="lead problem">
            <span className="problem__tag">Problem:</span>
            There was no way to leave context inside the model, so notes lived in emails and chats, disconnected from the work.
          </p>
        </Reveal>
        <div className="fdetail">
          <div className="fdetail__side fdetail__what">
            <div className="fdetail__label">What we did</div>
            <ul className="fdetail__list">
              {[
                "Notes inside the model: Inputs, Model Map, Outputs",
                "Notes stay attached to the model",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
          <MockBrowser className="mock--lg" url="dtv-react-dev-...databricksapps.com/analytics/notes">
            <img src="pictures/Notes.png" alt="Notes" />
          </MockBrowser>
          <div className="fdetail__side fdetail__impact">
            <div className="fdetail__label">Impact</div>
            <ul className="fdetail__list">
              {[
                "Context lives with the work, not in emails",
                "Nothing gets lost between sessions or people",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 10c — FEATURE DETAIL: Global Search */}
      <Section id="f-search" eyebrow="New Feature · 3 of 5" title="Global Search">
        <Reveal delay={100}>
          <p className="lead problem">
            <span className="problem__tag">Problem:</span>
            Finding a specific input, output, or resource meant scrolling through many tabs, wasting time.
          </p>
        </Reveal>
        <div className="fdetail">
          <div className="fdetail__side fdetail__what">
            <div className="fdetail__label">What we did</div>
            <ul className="fdetail__list">
              {[
                "Search any input, output, or resource",
                "One search box across the whole tool",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
          <MockBrowser className="mock--lg" url="dtv-react-dev-...databricksapps.com/analytics/search">
            <img src="pictures/Global Search.png" alt="Global Search" />
          </MockBrowser>
          <div className="fdetail__side fdetail__impact">
            <div className="fdetail__label">Impact</div>
            <ul className="fdetail__list">
              {[
                "Jump anywhere in the model in seconds",
                "No more scrolling through every tab",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 10d — FEATURE DETAIL: Knowledge AI Assistant */}
      <Section id="f-hub" variant="alt" eyebrow="New Feature · 4 of 5" title="Knowledge AI Assistant">
        <Reveal delay={100}>
          <p className="lead problem">
            <span className="problem__tag">Problem:</span>
            New users didn't know how DtV worked and had to ask teammates just to learn the tool.
          </p>
        </Reveal>
        <div className="fdetail">
          <div className="fdetail__side fdetail__what">
            <div className="fdetail__label">What we did</div>
            <ul className="fdetail__list">
              {[
                "Ask anything about DtV in plain language",
                "Grounded on the tool's guides, FAQ, and glossary",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
          <MockBrowser className="mock--lg" url="dtv-react-dev-...databricksapps.com/analytics/assistant">
            <img src="pictures/Ai Assistant.png" alt="Knowledge AI Assistant" />
          </MockBrowser>
          <div className="fdetail__side fdetail__impact">
            <div className="fdetail__label">Impact</div>
            <ul className="fdetail__list">
              {[
                "Learn the tool without asking teammates",
                "Instant answers on how to use DtV",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 10e — FEATURE DETAIL: Import Inputs from Template */}
      <Section id="f-import" eyebrow="New Feature · 5 of 5" title="Import Inputs from Template">
        <Reveal delay={100}>
          <p className="lead problem">
            <span className="problem__tag">Problem:</span>
            Setting up a new model meant re-entering inputs by hand, slow and error-prone.
            <span className="tag-uc">Under Construction</span>
          </p>
        </Reveal>
        <div className="fdetail">
          <div className="fdetail__side fdetail__what">
            <div className="fdetail__label">What we did</div>
            <ul className="fdetail__list">
              {[
                "Created a template for the BA Document, the one users already work with",
                "Built a map on the inputs to identify each value and paste it into the right place",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
          <MockBrowser className="mock--lg" url="dtv-react-dev-...databricksapps.com/analytics/import">
            <img src="pictures/Import Inputs.png" alt="Import Inputs from Template" />
          </MockBrowser>
          <div className="fdetail__side fdetail__impact">
            <div className="fdetail__label">Impact</div>
            <ul className="fdetail__list">
              {[
                "Set up a new model in one click",
                "Less manual entry, fewer errors",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 11 — AI (Pillar 3) */}
      <Section id="ai" variant="dark" eyebrow="Pillar 3 · From numbers to understanding" title="Results Interpreter AI Assistant, right inside the tool">
        <Reveal delay={80}>
          <p className="lead problem">
            <span className="problem__tag">Problem:</span>
            Users could see their results but couldn't interpret what the numbers meant on their own.
          </p>
        </Reveal>
        <div className="fdetail">
          <div className="fdetail__side fdetail__what">
            <div className="fdetail__label">What we did</div>
            <ul className="fdetail__list">
              {[
                "Databricks AI agent (Genie), grounded on the model's data",
                "Embedded directly in the analysis page (UI)",
                "Plain-language answers about your results",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
          <MockBrowser className="mock--lg" url="dtv-react-dev-...databricksapps.com/analytics/hiplot">
            <img src="pictures/Ai assistant 3.png" alt="AI Assistant" />
          </MockBrowser>
          <div className="fdetail__side fdetail__impact">
            <div className="fdetail__label">Impact</div>
            <ul className="fdetail__list">
              {[
                "Answers based on real results, not guesses",
                "Ask questions without leaving the tool",
                "Users understand their numbers on their own",
              ].map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80}>{t}</Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 12 — SUPPORT (Pillar 4: Support & Usage Data) */}
      <Section id="support" variant="alt" eyebrow="Pillar 4 · Help them learn it, measure how they use it" title="Zero dependency: users build models on their own">
        <SplitList
          left={{
            title: "Support & Documentation",
            items: [
              "How-to guides",
              "FAQ",
              "Glossary",
              "Demo videos",
              "Demo files",
              "Contextual help on each tab",
            ],
          }}
          right={{
            title: "Usage & Data",
            items: [
              "User-activity logging (open/save/run/export)",
              "Metrics dashboard",
              "Databricks dashboards: Genie usage & outputs usage",
            ],
          }}
          third={{
            title: "Impact for Users",
            items: [
              "Build models on their own",
              "Fewer support requests",
              "Faster onboarding",
            ],
          }}
          fourth={{
            title: "Impact for Developers",
            items: [
              "Data-driven decisions on what to improve",
              "Clear visibility into real usage",
              "Easier to prioritize the next features",
            ],
          }}
        />
        <Reveal delay={200}>
          <p className="lead" style={{ marginTop: 28, textAlign: "center" }}>
            Give users more power without making them relearn their job,
            powered by documentation and AI.
          </p>
        </Reveal>
      </Section>

      {/* 13 — COMPARISON */}
      <Section id="comparison" eyebrow="Impact" title="Before vs. After">
        <div className="compare">
          <div className="compare__head">
            <span>Metric</span><span>Before</span><span>After</span>
          </div>
          <CompareRow metric="Development cycle time" before="1–2 days" after="1–2 hours" delay={0} />
          <CompareRow metric="Performance (loads)" before="Baseline" after="80–90% faster" delay={60} />
          <CompareRow metric="Data loss risk (unsaved)" before="High (~50% loss)" after="Low (<2% loss)" delay={120} />
          <CompareRow metric="Overall savings (weekly)" before="-" after="8–16 hrs · ~$1,000 / user" delay={240} />
        </div>
      </Section>

      {/* 14 — LESSONS LEARNED */}
      <Section id="lessons" variant="dark" eyebrow="Reflection" title="Lessons Learned">
        <ul className="bullets">
          {[
            "The best features came from listening to users, not from my desk.",
            "Learned React and scalable front-end architecture from scratch.",
            "Breaking big problems into shippable pieces.",
            "Agile & daily standups: clear communication ships faster.",
            "Small, frequent releases beat one big launch.",
            "Feature flags let us ship safely per environment.",
            "Good documentation reduces dependency and support requests.",
            "Asking questions early saves hours of rework later.",
          ].map((t, i) => (
            <Reveal as="li" key={i} delay={i * 90}>{t}</Reveal>
          ))}
        </ul>
      </Section>

      {/* 15 — ABOUT ME Part 2 (More About Me) */}
      <Section id="aboutMore" variant="alt" eyebrow="About Me" title="More About Me">
        <PhotoStrip photos={PICTURES.map(p => ({ src: `pictures/${p.file}`, caption: p.caption, type: p.type, position: p.position }))} />
      </Section>

      {/* 16 — CLOSING */}
      <Section id="closing" closing variant="dark">
        <Reveal><p className="eyebrow">Design to Value · React Migration</p></Reveal>
        <Reveal delay={220}>
          <ul className="closing-checks">
            {[
              "80–90% faster than before",
              "Reliable: no more lost work",
              "Scalable, reusable architecture",
              "Ready to grow with more users",
              "Gained experience working in a real team",
              "Ready for new projects",
            ].map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={360}>
          <p className="lead" style={{ margin: "40px auto 0", color: "#e8e8ea" }}>
            Beyond the work, an unforgettable co-op and summer, thanks to
            amazing friends and mentors along the way.
          </p>
        </Reveal>
        <Reveal delay={480}>
          <p className="lead" style={{ margin: "24px auto 0", color: "#a1a1a6" }}>
            Thank you. Questions welcome.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
