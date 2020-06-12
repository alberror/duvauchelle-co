import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout color="indigo">
      <div className="contact-page-container indigo-bg">
        <div className="contact-page-content">
          <h1>Contactez-moi</h1>
          <form
            className="contact-form"
            action="https://formspree.io/antoine@duvauchelle.co"
            method="POST"
          >
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="_replyto" id="email" />
            <label htmlFor="message">Votre message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="link-button cta-button"
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
