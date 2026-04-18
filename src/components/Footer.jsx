import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Max McWhae. All rights reserved.</p>
        <p className="footer-tagline">Portfolio, Services & Written Work</p>
      </div>
    </footer>
  )
}

export default Footer
