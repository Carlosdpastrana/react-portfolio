function Contact() {
    return (
      <section className="contact-section">
        <h2>Contact</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
  
          <button type="submit">Send</button>
        </form>
  
        <div className="contact-info">
          <p>Email: carlosdpastrana@icloud.com</p>
          <p>Phone: (385) 286-7494</p>
        </div>
      </section>
    );
  }
  
  export default Contact;