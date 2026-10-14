export default function Hero() {
  return (
    <section className="hero wrap" id="home">
      {/* Left Side: Content & Call to Actions */}
      <div className="hero-content">
        <div className="eyebrow">
          <span className="dot" />
          Web Development Studio
        </div>

        <h1>
          Building <span className="gradient-text">modern web apps</span> with
          precision &amp; speed.
        </h1>

        <p>
          We craft high-performance full-stack web applications, custom
          platforms, and interactive digital experiences tailored for your
          business growth.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary nav-cta">
            Start Your Project
          </a>

          <a href="#projects" className="secondary">
            Explore Works
          </a>
        </div>

        <div className="micro-proof">
          <span>
            <b>100%</b> Clean Code
          </span>
          <span className="proof-separator">•</span>
          <span>
            <b>MERN / Appwrite</b> Stack
          </span>
          <span className="proof-separator">•</span>
          <span>
            <b>Fast</b> Delivery
          </span>
        </div>
      </div>

      {/* Right Side: Visual & Interactive Animations */}
      <div className="visual">
        {/* Abstract Energy Trails & SVG Light Draw */}
        <div className="hero-light-draw" aria-hidden="true">
          <svg viewBox="0 0 600 600" fill="none">
            <defs>
              <linearGradient
                id="energyLight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F5E6CA" />
                <stop offset="100%" stopColor="#FF5722" />
              </linearGradient>

              <filter
                id="energyBloom"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <path
              className="energy"
              pathLength="1"
              d="M100,300 C150,150 350,100 450,250 C550,400 350,500 200,400 C100,300 250,100 400,200"
            />

            <path
              className="energy e2"
              pathLength="1"
              d="M120,320 C170,180 370,120 430,270 C520,380 330,480 220,380"
            />

            <circle className="core" cx="300" cy="300" r="12" />
            <circle className="core-ring" cx="300" cy="300" r="24" />
          </svg>
        </div>

        {/* Orbit Rings */}
        <div className="orbit" />

        {/* Floating Code Card */}
        <div className="code-card">
          <div className="code-top">
            <div className="lights">
              <i />
              <i />
              <i />
            </div>

            <span>trinetra-core.js</span>
          </div>

          <div className="code">
            <div>
              <span className="blue">const</span> studio ={" "}
              <span className="pink">new</span>{" "}
              <span className="yellow">TrinetraTech</span>();
            </div>

            <div>
              studio.<span className="blue">init</span>({"{"}
            </div>

            <div className="code-indent">
              stack: [<span className="green">'React'</span>,{" "}
              <span className="green">'Node'</span>,{" "}
              <span className="green">'Appwrite'</span>],
            </div>

            <div className="code-indent">
              quality: <span className="pink">0.99</span>
            </div>

            <div>{"});"}</div>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="floating float-one">
          <span className="floating-symbol">⚡</span>
          <div>
            <strong>Fast &amp; Scalable</strong>
            <span>Full-Stack Architecture</span>
          </div>
        </div>

        <div className="floating float-two">
          <span className="floating-symbol">✦</span>
          <div>
            <strong>Clean Code</strong>
            <span>Production Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
