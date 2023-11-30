import { useQuery } from "@tanstack/react-query";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import { Fragment, useContext, useEffect, useState } from "react";

import "./biodetails.css";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";

const BioDetails = () => {
  const [similarBio, setSimilarBio] = useState([]);
  const { bioId } = useParams();
  const axiosPublic = useAxiosPublic();
  const { user, userRole } = useContext(AuthContext);

  const navigate = useNavigate();
  const notify = () => toast("Your Request submitted successfully");

  const handleFavourites = () => {
    const newFavourite = {
      name: bioSingle?.name,
      biodataId: bioSingle?.bioId,
      perm_division: bioSingle?.perm_division,
      occupation: bioSingle?.occupation,
      email: user?.email,
    };

    axiosPublic.post("/favourites", newFavourite).then((response) => {
      if (response.data) {
        notify();
      }
    });
  };

  const {
    isFetching,
    isLoading,
    data: bioSingle,
  } = useQuery({
    queryKey: ["biodataDetails", bioId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${bioId}`);
      return res.data;
    },
  });

  useEffect(() => {
    axiosPublic
      .get(`/similarbio?gender=${bioSingle?.bioType}`)
      .then((response) => setSimilarBio(response.data));
  }, [bioSingle]);

  return (
    <>
      <div className="bioDetails container-fluid">
        <Container>
          {isLoading && (
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
          {isFetching && (
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
          <div className="bioDetails_n_sidebar">
            <div className="bioDetails_main">
              <div className="img_wrapper">
                <h2>Biodata Details of {bioSingle?.name}</h2>
                <img src={bioSingle?.profile_image} alt="profile Picture" />
              </div>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Particulars</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>BioData Id</th>
                    <td>{bioId}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{bioSingle?.name}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{bioSingle?.bioType}</td>
                  </tr>
                  <tr>
                    <th>Date Of Birth</th>
                    <td>{bioSingle?.birth_date}</td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td>{bioSingle?.height}</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>{bioSingle?.weight}</td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>{bioSingle?.age}</td>
                  </tr>
                  <tr>
                    <th>Occupation</th>
                    <td>{bioSingle?.occupation}</td>
                  </tr>
                  <tr>
                    <th>Race</th>
                    <td>{bioSingle?.race}</td>
                  </tr>
                  <tr>
                    <th>Father&apos;s Name</th>
                    <td>{bioSingle?.Father_name}</td>
                  </tr>
                  <tr>
                    <th>Mother&apos;s Name</th>
                    <td>{bioSingle?.mother_name}</td>
                  </tr>
                  <tr>
                    <th>Permanent Division</th>
                    <td>{bioSingle?.perm_division}</td>
                  </tr>
                  <tr>
                    <th>Present Division</th>
                    <td>{bioSingle?.present_division}</td>
                  </tr>
                  <tr>
                    <th>Expected Partner Age</th>
                    <td>{bioSingle?.age}</td>
                  </tr>
                  <tr>
                    <th>Expected Partner Height</th>
                    <td>{bioSingle?.expected_partner_height}</td>
                  </tr>
                  <tr>
                    <th>Expected Partner Weight</th>
                    <td>{bioSingle?.expected_partner_weight}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{userRole !== "regular" && bioSingle?.email}</td>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <td>{userRole !== "regular" && bioSingle?.mobile}</td>
                  </tr>
                  {userRole === "regular" && (
                    <tr>
                      <td colSpan="2">
                        <button
                          onClick={() => navigate(`/checkout/${bioId}`)}
                          className="btn btn-light"
                        >
                          Request Contact Info
                        </button>
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td colSpan="2">
                      <button
                        onClick={handleFavourites}
                        className="btn btn-light"
                      >
                        Add to Favourites
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            {/* sidebar */}
            <div className="bioDetails_sidebar">
              <h3>Similar Biodatas</h3>
              <div className="feature__cards">
                {similarBio?.map((item, index) => (
                  <Fragment key={`similar-bio-${index}`}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={item.profile_image} />
                      <Card.Body>
                        <Card.Title>Biodata Id: {item.bioId}</Card.Title>
                        <ul className="card-text">
                          <li>
                            <strong>Biodata Type: </strong>
                            {item.bioType}
                          </li>
                          <li>
                            <strong>Permanent Division: </strong>
                            {item.perm_division}
                          </li>
                          <li>
                            <strong>Age: </strong>
                            {item.age}
                          </li>
                          <li>
                            <strong>Occupation: </strong>
                            {item.occupation}
                          </li>
                        </ul>
                        <Button
                          onClick={() => navigate(`/biodatas/${item.bioId}`)}
                          variant="danger"
                        >
                          View Profile
                        </Button>
                      </Card.Body>
                    </Card>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
};

export default BioDetails;
