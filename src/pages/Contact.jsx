function Contact() {
    return (
      <section>
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p>Email: carlosdpastrana@icloud.com</p>
        <p>Phone: (385) 286-7494</p>
      </section>
    );
  }
  
  export default Contact;