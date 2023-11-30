import { Container } from "react-bootstrap";
import CountUp from 'react-countup';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const axiosPublic = useAxiosPublic();

    const {
        data: revenue,
      } = useQuery({
        queryKey: ["revenue"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/revenues`);
          return res.data;
        },
      });
  return (
    <>
      <div className="counter container-fluid">
        <Container>
          <h2>Success Counter</h2>
          <div className="counter__items">
            <div className="item">
                <h4>Total Biodata</h4>
              <CountUp start={0} end={revenue?.totalBio} duration={5} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="item">
                <h4>Female Biodata</h4>
              <CountUp start={0} end={revenue?.femaleBio} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="item">
                <h4>Male Biodata</h4>
              <CountUp start={0} end={revenue?.maleBio} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="item">
                <h4>Premium Biodata</h4>
              <CountUp start={0} end={revenue?.totalpremium} delay={0} duration={5}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="item">
                <h4>Total Revenue</h4>
              <CountUp start={0} end={revenue?.revenue} delay={0} duration={5}>
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

export default AdminHome;
