import { Container } from "react-bootstrap";
import { images } from "../../assets";
import './aboutus.css'

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid about">
        <Container>
          <h2>We help you find the best life partner.</h2>
          <div className="image_text">
            <div className="text_wrapper">
              <p>
                Welcome to FairMarriage, where meaningful connections flourish
                and lifelong bonds are formed. We are dedicated to facilitating
                genuine and lasting relationships, understanding the sanctity
                and significance of marriage in one&apos;s life journey.
              </p>    

              <p>
                Our commitment extends beyond mere matchmaking; we are dedicated
                to supporting you through every step of your journey, offering
                guidance, advice, and a personalized experience. FairMarriage is
                more than just a matrimonial platform; it&apos;s a community built on
                trust, respect, and understanding.
              </p>

              <p>
                Join us at FairMarriage and embark on a path towards a
                meaningful and fair union. Let us help you find the one with
                whom you can build a future filled with love, companionship, and
                joy. Together, let&apos;s celebrate the beauty of marriage and create
                lasting bonds that stand the test of time.
              </p>

              <p>
                Feel free to personalize this text further to better align with
                the specific values and goals of your matrimony site, and to
                make it resonate more with your audience
              </p>
            </div>
            <div className="img_wrapper">
                <img src={images.about} alt="about us" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
