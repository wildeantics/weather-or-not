import { FaFigma, FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <h1>About</h1>
      <p>Hi, I'm Morgan</p>
      <p>Thanks for checking out my app</p>
      <p>In this app I used</p>
      <div>
        <FaFigma />
        <FaReact />
      </div>
      <p>This was developed for my</p>
      <a href='https://wilde.mx'>Porfolio</a>
      <p>Code accessible on my</p>
      <a href='https://github.com/wildeantics'>GitHub</a>
      <Link to='/'>Back</Link>
    </>
  )
}

export default About
