import React, { useState } from "react"
import { StyledContact } from "../styles/ContactStyles"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    switch (name) {
      case "name":
        setFormErrors({ ...formErrors, name: value ? "" : "Name is required" })
        break
      case "email":
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        setFormErrors({
          ...formErrors,
          email: emailRegex.test(value) ? "" : "Invalid email address",
        })
        break
      case "message":
        setFormErrors({
          ...formErrors,
          message: value ? "" : "Message is required",
        })
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., send data to a server)
  }

  return (
    <StyledContact>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {formErrors.message && <p className="error">{formErrors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </StyledContact>
  )
}

export default Contact
