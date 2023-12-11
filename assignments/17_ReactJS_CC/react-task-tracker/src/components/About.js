import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* <a href="/">Go Back</a>  --- USE Link to instead of a href IF you use ROUTES so the page doesn't reload when you click the link About */}
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
