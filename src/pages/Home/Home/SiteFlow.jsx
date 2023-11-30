import { Container } from "react-bootstrap"
import { images } from "../../../assets"

const SiteFlow = () => {
  return (
    <>
        <div className="siteFlow container-fluid">
          <Container>
            <h2>How The Website Works</h2>
            <div className="flowchart">

            <div className="img_wrapper">
              <img src={images.siteflow} alt="" />
            </div>
            <ul>
              <li>Register With Your Email</li>
              <li>Search to Find Your Desired Biodata</li>
              <li>Choose Your Bride/Groom</li>
              <li>Be a Premium Member</li>
              <li>Contact with your Chosen Bride/Groom</li>
              <li>Start your Journey with your new Life Partner</li>
            </ul>
            </div>

          </Container>
        </div>
    </>
  )
}

export default SiteFlow