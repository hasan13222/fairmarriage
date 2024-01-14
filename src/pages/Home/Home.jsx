import Banner from "./Home/Banner";
import Counter from "./Home/Counter";
import Feature from "./Home/Feature";
import SiteFlow from "./Home/SiteFlow";
import Stories from "./Home/Stories";
import { FaAngleUp } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Faq from "./Home/Faq";

const Home = () => {

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing type
      once: false,
      offset: 250
    });
  }, []);
  return (
    <>
      <Banner />
      <Feature />
      <SiteFlow/>
      <Counter />
      <Stories />
      <Faq/>
      <button onClick={scrollTopHandler} className="go_to_top">
        <FaAngleUp />
      </button>
    </>
  );
};

export default Home;
