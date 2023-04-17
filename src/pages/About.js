import React from "react"
import { StyledAbout } from "../styles/AboutStyles"

const About = () => {
  return (
    <StyledAbout>
      <img src="path/to/your/photo.jpg" alt="Your Name" />
      <div>
        <h2>About Me</h2>
        <p>
          I am currently studying to work as a Frontend Web Developer. I have
          been studying various technologies and programming languages,
          including HTML, CSS, JavaScript, jQuery Responsive Design, Bootstrap,
          Handlebars, Local Storage, Session Storage, IndexedDB, React.js and many more. In my free time, I enjoy learning new
          technologies.
        </p>
      </div>
    </StyledAbout>
  )
}

export default About
