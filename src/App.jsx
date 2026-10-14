
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          AS<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-link">
            Contact Me ↗
          </a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              FLUTTER DEVELOPER
            </div>

            <h1>
              Hi, I'm <span>Aswin Saji.</span>
              <br />
              I build apps
              <br />
              <span className="gradient-text">
                that make an impact.
              </span>
            </h1>

            <p className="hero-description">
              I'm a Flutter developer with 2+ years of experience
              building mobile applications, integrating APIs, and
              creating smooth user experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-button">
                Let's Talk
              </a>
            </div>

            <div className="hero-footer">
              <span>FLUTTER & DART</span>
              <span>•</span>
              <span>MOBILE APP DEVELOPMENT</span>
              <span>•</span>
              <span>API INTEGRATION</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-blue"></div>
            <div className="glow glow-purple"></div>

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="code-card">
              <div className="code-card-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>hello_world.dart</span>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">class</span>{' '}
                  <span className="code-blue">Developer</span> {'{'}
                </p>
                <p>&nbsp; <span className="code-purple">final</span> skills = [</p>
                <p>&nbsp;&nbsp; <span className="code-green">'Flutter'</span>,</p>
                <p>&nbsp;&nbsp; <span className="code-green">'Dart'</span>,</p>
                <p>&nbsp;&nbsp; <span className="code-green">'Firebase'</span>,</p>
                <p>&nbsp;&nbsp; <span className="code-green">'REST APIs'</span>,</p>
                <p>&nbsp; ];</p>
                <p>&nbsp;</p>
                <p>
                  &nbsp; <span className="code-purple">void</span>{' '}
                  <span className="code-blue">build</span>() {'{'}
                </p>
                <p>&nbsp;&nbsp; createSomethingGreat();</p>
                <p>&nbsp; {'}'}</p>
                <p>{'}'}</p>
              </div>

              <div className="code-card-footer">
                <span className="status-dot"></span>
                Ready to build something great
              </div>
            </div>

            <div className="floating-badge badge-flutter">
              <span className="flutter-symbol">F</span>
              Flutter
            </div>

            <div className="floating-badge badge-experience">
              <strong>2+</strong>
              <span>Years of experience</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about section" id="about">
          <p className="section-label">01 / ABOUT ME</p>

          <h2>
            Turning ideas into <span>real products.</span>
          </h2>

          <p className="section-description">
            I enjoy building practical mobile applications that solve
            real problems. From real-time communication to property
            management and job platforms, I focus on clean interfaces,
            reliable integrations, and maintainable code.
          </p>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills section" id="skills">
          <p className="section-label">02 / MY TOOLKIT</p>

          <h2>Technologies I work with.</h2>

          <div className="skill-list">
            {[
              'Flutter',
              'Dart',
              'Provider',
              'BLoC',
              'Riverpod',
              'REST APIs',
              'Firebase',
              'WebSockets',
              'Git',
              'AWS',
            ].map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-icon">✳</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects section" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>

          <h2>Projects I'm proud of.</h2>

          <div className="project-grid">
            {/* PROJECT 1: SMARTSTATION */}
            <article className="project-card">
              <div className="project-number">PROJECT / 01</div>

              <div className="project-image">
                <img
                  src="/images/smartStationImages/smartStation.png"
                  alt="SmartStation mobile application"
                  loading="lazy"
                />
              </div>

              <h3>SmartStation</h3>

              <p>
                A communication platform featuring messaging,
                group conversations, voice and video calls,
                document sharing, signatures, and more.
              </p>

              <div className="project-tags">
                <span>Flutter</span>
                <span>Provider</span>
                <span>REST APIs</span>
                <span>WebSockets</span>
                <span>ZEGOCLOUD</span>
              </div>
            </article>

            {/* PROJECT 2: STAYZR */}
            <article className="project-card">
              <div className="project-number">PROJECT / 02</div>

              <div className="project-image">
                <img
                  src="/images/realestateImages/realestateImage.png"
                  alt="Stayzr real estate application"
                  loading="lazy"
                />
              </div>

              <h3>Stayzr</h3>

              <p>
                A real-estate application for property discovery,
                buying and renting, property management, and
                owner-tenant workflows.
              </p>

              <div className="project-tags">
                <span>Flutter</span>
                <span>Provider</span>
                <span>REST APIs</span>
                <span>WebSockets</span>
                <span>AWS</span>
              </div>
            </article>

            {/* PROJECT 3: CV STATION / JOB PLATFORM */}
            <article className="project-card">
              <div className="project-number">PROJECT / 03</div>

              <div className="project-image">
                <img
                  src="/images/cvStationImages/cvStationApp.png"
                  sizes='2'
                  alt="CV Station mobile application"
                  loading="lazy"
                />
              </div>

              <h3>CV Station</h3>

              <p>
                A job platform connecting candidates and recruiters
                through job listings, search, filters, applications,
                and communication features.
              </p>

              <div className="project-tags">
                <span>Flutter</span>
                <span>REST APIs</span>
                <span>Provider</span>
                <span>AWS</span>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact section" id="contact">
          <p className="section-label">04 / GET IN TOUCH</p>

          <h2>
            Have an idea? <span>Let's build it.</span>
          </h2>

          <p className="section-description">
            I'm open to discussing Flutter opportunities,
            interesting projects, and new collaborations.
          </p>

          <a
            className="primary-button"
            href="mailto:aswinsaji5@gmail.com"
          >
            Email Me ↗
          </a>

          <p className="contact-note">
            <a href="mailto:aswinsaji5@gmail.com">
              aswinsaji5@gmail.com
            </a>
            <br />
            <a href="tel:+917994110956">
              +91 7994110956
            </a>
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          AS<span>.</span>
        </a>

        <p>Designed & built with React by Aswin Saji.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
