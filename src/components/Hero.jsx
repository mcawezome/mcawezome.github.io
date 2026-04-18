import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">Max McWhae</h1>
          <h2 className="hero-subtitle">AI Safety Advocate & Educator</h2>
          <p className="hero-mission">Sustainably creating good for all</p>
          <p className="hero-description">
            Working to advance technical AI Safety through research, education,
            and community building.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">View Services</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <span>Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
