import { MdHome } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='footer'>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className=''>
            <MDBCol md="12" className='text-cener footer_top_item mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold'>
                <img src="/logo.png" alt="logo" />
              </h6>
              <p className="text-center">
              The fair marriage matrimony website strives to create a platform where individuals can seek a life partner based on mutual respect. It is a distinguished online platform dedicated to fostering meaningful connections. Our mission is to provide a trusted space where individuals seeking a lifelong partner can embark on their journey towards a fair marriage.
              </p>
            </MDBCol>
            </MDBRow>
            <MDBRow className='footer_btm_items'>
            <MDBCol md="3" lg="4" className='text-center mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login
                </a>
              </p>
            </MDBCol>

            
            <MDBCol md="5" lg="4" className='text-center mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Address</h6>
              <p>
              <MdHome />
                New York, NY 10012, US
              </p>
              <p>
              <FaEnvelope />
                info@example.com
              </p>
              <p>
              <FaPhoneAlt /> +01 234 567 88
              </p>
            </MDBCol>

            <MDBCol md="4" lg="4" className='text-center mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Biodatas
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: FairMarriage Matrimony
      </div>
    </MDBFooter>
    </>
  );
};

export default Footer;
