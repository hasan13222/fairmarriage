import { Button, Card, Container, Spinner } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

const Stories = () => {
  const axiosPublic = useAxiosPublic();

  const {
    isFetching,
    isLoading,
    data: reviews,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });
  return (
    <>
      <div className="stories container-fluid">
        <Container>
          <h2>Success Stories</h2>
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
          <div className="stories__items">
            {reviews?.map((review, index) => (
              <Fragment key={`item-${index}`}>
                <div className="item">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={review.couple_image} />
                    <Card.Body>
                      <Card.Title>
                        {review.groom_name} and {review.bride_name} <small>{review.marriage_date}</small>
                      </Card.Title>
                      <div className="stars">
                        {[...Array(5).keys()].map((star, i) => (
                          <Fragment key={`star-${star}`}>
                            {i < review.star ? (<FaStar />) : (<FaRegStar />)}
                          </Fragment>
                        ))}                        
                      </div>
                      <p>
                        {review.review}
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Fragment>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Stories;
