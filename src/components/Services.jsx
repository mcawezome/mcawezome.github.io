import './Services.css'

const services = [
  {
    id: 1,
    title: 'Mathematics Tutoring',
    description: 'Specialist-level high school mathematics tutoring for students in Perth. Over 10 years of experience helping students succeed.',
    details: [
      'Mathematics Specialist curriculum',
      'Available at your home or library',
      'Personalised learning approach',
    ],
    rate: '$60/hour',
    location: 'Perth, Australia',
  },
  {
    id: 2,
    title: 'Python Code Repair',
    description: 'Code repair and debugging services for vibe-coded projects. Helping bring AI-assisted projects to production quality.',
    details: [
      'Debug and fix Python code',
      'Refactor for maintainability',
      'Code review and improvements',
    ],
    rate: 'Contact for quote',
    location: 'Remote',
  },
  {
    id: 3,
    title: 'IT Assistance for Seniors',
    description: 'Patient, friendly technology support for seniors in the Perth region. Helping you get comfortable with modern technology.',
    details: [
      'Device setup and troubleshooting',
      'Software and app guidance',
      'Online safety education',
    ],
    rate: '$120/hour',
    location: 'Perth, Australia',
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="services-intro">Currently available for work in the following areas:</p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-details">
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className="service-meta">
                  <span className="service-rate">{service.rate}</span>
                  <span className="service-location">{service.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
