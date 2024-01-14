import { useQuery } from "@tanstack/react-query";
import { Container } from "react-bootstrap";
import CountUp from 'react-countup';
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Counter = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: counter,
  } = useQuery({
    queryKey: ["counter"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodataCounts`);
      return res.data;
    },
  });
  return (
    <>
      <div data-aos="flip-up" className="counter container-fluid">
        <Container>
          <h2>Success Counter</h2>
          <div className="counter__items">
            <div className="item">
                <h4>Total Biodata</h4>
              <CountUp start={0} end={counter?.totalBio} duration={5} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="item">
                <h4>Number of Brides</h4>
              <CountUp start={0} end={counter?.femaleBio} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="item">
                <h4>Number of Grooms</h4>
              <CountUp start={0} end={counter?.maleBio} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="item">
                <h4>Number of Success Marriage</h4>
              <CountUp start={0} end={counter?.totalMarriage} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Counter;
