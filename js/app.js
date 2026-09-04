/* ============================================================
   APP  — 10 sections, all driven by <Section>.
   Edit the content freely; add/remove <Section> blocks
   and keep SECTION_IDS in sync for the nav dots.
   ============================================================ */
const SECTION_IDS = [
  "hero", "about", "project", "oldway", "problems", "before", "after",
  "mission", "migration", "accomplishments", "features",
  "ai", "support", "comparison", "lessons", "aboutMore", "whatsNext", "closing",
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
      <Section id="project" eyebrow="The Project" title="What did I do this summer?">
        <Reveal delay={100}>
          <p className="project-sub">
            I worked on the migration to React and improvement of Design to Value (DtV).
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="lead">
            DtV simulates a product's <strong>financial outcome before it's
            built</strong>. It brings architecture, volume, cost, and timing into
            one model, showing the impact on <strong>margin, cash flow, risk, and
            NPV</strong>, so teams can <strong>back their investment with
            data</strong>.
          </p>
        </Reveal>
      </Section>

      {/* 3a — BEFORE vs. THE FIRST DTV (two halves) + the question */}
      <Section id="oldway" variant="alt" eyebrow="Where we started" title="Before vs. the first Design to Value">
        <div className="beforeafter">
          {/* Left half — the vintage old way */}
          <Reveal delay={100}>
            <div className="oldway">
              <div className="oldway__stamp">Circa 2023</div>
              <p className="oldway__text">
                It worked, but it took <strong>a lot of time and manual
                effort</strong>, spread across spreadsheets, emails, and
                meetings.
              </p>
              <ul className="oldway__list">
                <li>Endless spreadsheets and email threads</li>
                <li>Delays and thin margins</li>
                <li>Too many people in the loop</li>
                <li>Information scattered and hard to connect</li>
              </ul>
              <p className="oldway__sign">Slow, manual, and error-prone.</p>
            </div>
          </Reveal>

          {/* Right half — the software until the migration (Streamlit) */}
          <Reveal delay={220}>
            <div className="ba-new">
              <div className="ba-new__label">The software until the migration</div>
              <p className="ba-new__lead">
                Built in Streamlit, it made decisions <strong>fast and
                data-driven</strong>.
              </p>
              <ul className="ba-new__list">
                {[
                  { icon: "⚡", title: "Simulations in minutes", desc: "Results in minutes, not weeks." },
                  { icon: "📊", title: "Clear visual results", desc: "Charts and tables, easy to compare." },
                  { icon: "💡", title: "Confident investment decisions", desc: "Pick the highest-value option." },
                ].map((c, i) => (
                  <li key={i}>
                    <span className="ba-new__icon">{c.icon}</span>
                    <span>
                      <span className="ba-new__title">{c.title}</span>
                      <span className="ba-new__desc">{c.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* The driving question */}
        <Reveal delay={340}>
          <div className="question-banner">
            <div className="question-banner__eyebrow">The question</div>
            <p className="question-banner__text">
              How can we make DtV better overall: stronger performance, more
              efficiency, less time invested, and smarter decisions?
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 4 — PROBLEMS WE TACKLED (the purpose of the migration) */}
      <Section id="problems" eyebrow="Why migrate" title="Problems we tackled">
        <div className="feature-grid">
          {[
            { title: "Poor performance", desc: "Slow to load and easy to freeze." },
            { title: "Outdated, rigid UI", desc: "Old-fashioned look, little control over layout." },
            { title: "Easy to lose your work", desc: "One refresh could erase your work." },
            { title: "Hard to understand results", desc: "Numbers with no easy way to interpret them." },
            { title: "Steep learning curve", desc: "Guidance lived outside the app, slower to reach, so users leaned on teammates." },
            { title: "Not scalable", desc: "DtV couldn't grow with future users and needs." },
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
            <Reveal as="li" delay={360}>Scalable</Reveal>
          </ul>
          <MockBrowser url="dtv-react-dev-...azure.databricksapps.com/analytics">
            <img src="assets/new.png" alt="New DtV UI" />
          </MockBrowser>
        </div>
      </Section>

      {/* 4 — MISSION (My contribution — four pillars) */}
      <Section id="mission" eyebrow="My contribution" title="What I worked on, across four pillars.">
        <PillarGrid pillars={[
          { icon: "🔄", title: "Streamlit → React", desc: "Recreated DtV in React, keeping core functionality" },
          { icon: "✨", title: "New Features", desc: "Additional Features to Improve UX" },
          { icon: "🤖", title: "AI", desc: "AI to interpret results and guide everyday use" },
          { icon: "📚", title: "Support and Data Metrics", desc: "Help and Support for User. Metrics to see how the tool is used and where to improve" },
        ]} />
      </Section>

      {/* 7 — PILLAR 1 (Migration + Foundation merged) */}
      <Section id="migration" variant="dark" eyebrow="Pillar 1 · From script to application" title="Streamlit to React Migration">
        <p className="lead">We migrated DtV to React, keeping all its functionality while making key improvements along the way.</p>
        <div className="compare compare--three">
          <div className="compare__head">
            <span>Aspect</span><span>Before (Streamlit)</span><span>Now (React)</span>
          </div>
          {[
            ["UI updates", "Reran the whole script", "Re-renders only what changes"],
            ["Code structure", "One long script", "Reusable, modular components"],
            ["Look & feel", "Default Streamlit styling", "Custom Cummins design system"],
            ["Performance", "Full rerun on each action", "Efficient, on-demand rendering"],
            ["Saving your work", "Nothing persisted", "Auto-save to database"],
            ["Reliability", "State lost on refresh/crash", "State survives refresh & crashes"],
          ].map(([metric, before, after], i) => (
            <CompareRow key={i} metric={metric} before={before} after={after} delay={i * 70} />
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
          <StatCard num="19" label="Reusable Components" hint="Building blocks reused across the app (forms, tables, modals…)." delay={0} />
          <StatCard num="24" label="Tabs across the app" hint="Self-contained sections, like the Model Hub or Analytics." delay={60} />
          <StatCard num="~46k" label="Lines of Code" delay={120} />
          <StatCard num="~700" label="Hours worked" delay={180} />
        </div>
      </Section>

      {/* 10 — FEATURES (Pillar 2: new functionality) */}
      <Section id="features" variant="alt" eyebrow="Pillar 2 · Born from user feedback" title="Features that didn't exist before">
        <FeatureGrid items={[
          { icon: "🗺️", title: "Model Map",
            problem: "Users couldn't see how everything in the model connected, so mistakes only surfaced after a full run.",
            did: "Built a visual map of the whole model structure.",
            impact: "Validate the model before running it and catch mistakes early.",
            img: "pictures/04-model-map-diagram.png" },
          { icon: "📝", title: "Notes",
            problem: "No way to leave context inside the model, so notes lived in emails and chats.",
            did: "Added notes inside the model.",
            impact: "Context stays with the work, nothing gets lost between people.",
            img: "pictures/Notes.png" },
          { icon: "🔍", title: "Global Search",
            problem: "Finding an input, output, or resource meant scrolling through many tabs.",
            did: "Added one search box across the whole tool.",
            impact: "Jump anywhere in the model in seconds.",
            img: "pictures/Global Search.png" },
          { icon: "🤖", title: "Knowledge AI Assistant",
            problem: "New users didn't know how DtV worked, and guidance lived outside the app.",
            did: "Helped build an in-app AI chat, connected via API to a Databricks AI agent.",
            impact: "Learn the tool and get instant answers without asking teammates.",
            img: "pictures/Ai Assistant.png" },
          { icon: "📥", title: "Import Inputs from Template",
            problem: "Setting up a new model meant re-entering inputs by hand, slow and error-prone.",
            did: "Created a template from the BA Document and auto-map values into the right fields.",
            impact: "Set up a new model in one click, with fewer errors. (Under Construction)",
            img: "pictures/Import Inputs.png" },
        ]} />
      </Section>

      {/* 11 — AI (Pillar 3) */}
      <Section id="ai" variant="dark" eyebrow="Pillar 3 · From numbers to understanding" title="Results Interpreter AI Assistant">
        <Reveal delay={80}>
          <p className="lead problem">
            <span className="problem__tag">Problem:</span>
            The tool showed results but no help understanding them, so making sense of the numbers took extra time.
          </p>
        </Reveal>
        <div className="fdetail">
          <div className="fdetail__side fdetail__what">
            <div className="fdetail__label">What I did</div>
            <ul className="fdetail__list">
              {[
                "Embedded an existing Databricks AI agent (Genie) into the UI",
                "Handled the integration, testing, and documentation",
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
      <Section id="support" variant="alt" eyebrow="Pillar 4 · Help them learn it, measure how they use it" title="Support & Usage Data">
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
            title: "Impact for Users",
            items: [
              "Build models on their own",
              "Fewer support requests",
              "Faster onboarding",
            ],
          }}
          third={{
            title: "Usage & Data",
            items: [
              "Outputs Tabs usage dashboard (which tabs users use most)",
              "Knowledge Assistant dashboard (questions asked, usage)",
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
      </Section>

      {/* 13 — COMPARISON */}
      <Section id="comparison" eyebrow="Impact" title="Before vs. After">
        <div className="compare">
          <div className="compare__head">
            <span>Metric</span><span>Before</span><span>After</span>
          </div>
          <CompareRow metric="Development cycle time" before="8–16 hrs" after="4–6 hrs" delay={0} />
          <CompareRow metric="Performance (loads)" before="Baseline" after="80–90% faster" delay={60} />
          <CompareRow metric="Data loss risk (unsaved)" before="High (~50% loss)" after="Low (<2% loss)" delay={120} />
          <CompareRow metric="Overall savings (weekly)" before="-" after="Up to ~$1,000 / user" delay={240} />
        </div>
        <Reveal delay={300}>
          <p className="compare__note">
            Results vary by user and model; these reflect an average across the team.
          </p>
        </Reveal>
      </Section>

      {/* 14 — LESSONS LEARNED */}
      <Section id="lessons" variant="dark" eyebrow="Reflection" title="Lessons Learned">
        <ul className="bullets">
          {[
            <>Cummins' <strong>culture and people</strong> left a mark I didn't expect.</>,
            <>The <strong>trust to learn and grow</strong> surprised me every day.</>,
            <>The best features came from <strong>listening to users</strong>.</>,
            <>Learned <strong>React and scalable architecture</strong> from scratch.</>,
            <>Break big problems into <strong>small, shippable pieces</strong>.</>,
            <><strong>Asking questions early</strong> saves hours of rework.</>,
          ].map((t, i) => (
            <Reveal as="li" key={i} delay={i * 90}>{t}</Reveal>
          ))}
        </ul>
      </Section>

      {/* 15 — ABOUT ME Part 2 (More About Me) */}
      <Section id="aboutMore" variant="alt" eyebrow="About Me" title="More About Me">
        <PhotoStrip photos={PICTURES.map(p => ({ src: `pictures/${p.file}`, caption: p.caption, type: p.type, position: p.position }))} />
      </Section>

      {/* 15b — WHAT'S NEXT */}
      <Section id="whatsNext" eyebrow="What's next" title="What's Next">
        <div className="whatsnext">
          {[
            { icon: "🎓", title: "Graduate in December", desc: "Wrap up my degree and close this chapter of school." },
            { icon: "🛠️", title: "Finish what we built", desc: "Complete the remaining features, testing, and migration so DtV is ready for everyone." },
            { icon: "📚", title: "Grow into full-stack", desc: "Build on what I learned here to become a full-stack developer." },
            { icon: "🚀", title: "Start my career", desc: "Take the next step and start my career, hopefully here at Cummins." },
          ].map((c, i) => (
            <Reveal key={i} delay={120 + i * 120}>
              <div className="whatsnext__card">
                <div className="whatsnext__icon">{c.icon}</div>
                <div className="whatsnext__title">{c.title}</div>
                <p className="whatsnext__desc">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 16 — CLOSING */}
      <Section id="closing" closing variant="dark">
        <Reveal><p className="eyebrow">Design to Value · React Migration</p></Reveal>
        <Reveal delay={180}>
          <h2 className="closing__title">Special Thanks</h2>
        </Reveal>
        <Reveal delay={280}>
          <ul className="closing-thanks">
            {[
              { role: "Manager", name: "Ben Yeh" },
              { role: "Project Lead", name: "Varun Bhalerao" },
              { role: "Teammates", name: "Arunav Goswami & Kuhu Jain" },
              { role: "PSBU team", name: "for all your help and support" },
            ].map((t, i) => (
              <li key={i}>
                <span className="closing-thanks__role">{t.role}</span>
                <span className="closing-thanks__name">{t.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={420}>
          <p className="lead" style={{ margin: "36px auto 0", color: "#e8e8ea" }}>
            And to Cummins, for making co-ops and interns feel this important. I truly did.
          </p>
        </Reveal>
        <Reveal delay={540}>
          <p className="lead" style={{ margin: "24px auto 0", color: "#a1a1a6" }}>
            Thank you. Questions welcome.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
