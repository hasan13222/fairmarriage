import { Container } from "react-bootstrap";
import Typewriter from "react-ts-typewriter";

const Banner = () => {
  return (
    <>
      <div className="banner fluid">
        <Container>
          <h1>
            <Typewriter text={["Welcome to FairMarriage, where timeless connections begin", "Trusted and Dependable Matrimony site in Bangladesh"]} loop={true} speed={150} delay={2000}/>
            </h1>
          <button className="btn">Register Here</button>
        </Container>
      </div>
    </>
  );
};

export default Banner;
