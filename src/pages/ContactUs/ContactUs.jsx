import { Container } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <>
        <div className="container-fluid contact">
          <Container>
            <h2>Feel Free to Share Your Message to Us</h2>
            <div className="contact_form">
              <form>
                <div className="item">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" />
                </div>
                <div className="item">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" />
                </div>
                <div className="item">
                  <label htmlFor="message">What You want to Share</label>
                  <textarea name="message" cols="30" rows="7">Write Here...</textarea>
                </div>
                <input type="submit" value="Send" />
              </form>
            </div>
          </Container>
        </div>
    </>
  )
}

export default ContactUs