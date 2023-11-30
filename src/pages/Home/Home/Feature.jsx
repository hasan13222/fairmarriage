import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Fragment } from "react";
import {  useQuery  } from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const {
    isFetching,
    isLoading,
    data: featureProfiles,
  } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featureBiodatas");
      return res.data;
    },
  });
  return (
    <>
      <div className="container-fluid feature">
        <Container>
          <h2>Fetured Profiles</h2>
          {(isLoading || isFetching) && (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          )}

          <div className="feature__cards">
          {featureProfiles?.map((item, index) => (
            <Fragment key={`feature-profiles-${index}`}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.profile_image} />
                <Card.Body>
                  <Card.Title>Biodata Id: {item.bioId}</Card.Title>
                    <ul className="card-text">
                        <li><strong>Biodata Type: </strong>{item.bioType}</li>
                        <li><strong>Permanent Division: </strong>{item.perm_division}</li>
                        <li><strong>Age: </strong>{item.age}</li>
                        <li><strong>Occupation: </strong>{item.occupation}</li>
                    </ul>
                  <Button onClick={() => navigate(`/biodatas/${item.bioId}`)} variant="danger">View Profile</Button>
                </Card.Body>
              </Card>
            </Fragment>
          ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Feature;
