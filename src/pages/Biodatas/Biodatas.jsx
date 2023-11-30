import { Button, Card, Container, Spinner } from "react-bootstrap";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./biodata.css";

const Biodatas = () => {
  const [showbios, setShowbios] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    isFetching,
    isLoading,
    data: biodatas,
  } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });

  const handleFilter = (e) => {
    e.preventDefault();

    const form = e.target;
    const min_age = parseInt(form.min_age.value);
    const max_age = parseInt(form.max_age.value);
    const gender = (form.gender.value).toLowerCase();
    const division = (form.division.value).toLowerCase();
    const searchResult = biodatas?.filter(item => {
      return ((item.age > min_age || !min_age) && (item.age < max_age || !max_age) && (item.bioType.toLowerCase() === gender || !gender) && (item.perm_division.toLowerCase() === division || !division));
    })    
    setShowbios(searchResult);
  }
  useEffect(() => {
    setShowbios(biodatas)
  }, [biodatas])
  return (
    <>
      <div className="biodatas container-fluid">
        <Container>
          <h2>All Biodatas</h2>
          <div className="filter_n_bio_items">
            <div className="filter">
              <h3>Filter</h3>
              <form onSubmit={handleFilter}>
                <div className="item">
                  <p>Age Range</p>
                  <div className="age_range">
                    <div className="min_age">
                      <input placeholder="min" min="18" type="number" name="min_age" />
                    </div>
                    <span>to</span>
                    <div className="max_age">
                      <input placeholder="max" min="19" type="number" name="max_age" />
                    </div>
                  </div>
                </div>
                <div className="item biodata-type">
                  <p>Biodata Type</p>
                  <input type="radio" value="male" name="gender" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" value="female" name="gender"/>
                  <label htmlFor="female">Female</label>
                </div>
                <div className="item">
                  <label htmlFor="division">Division</label>
                  <select defaultValue="" name="division">
                    <option value="">Select...</option>
                    <option value="Dhaka">
                      Dhaka
                    </option>
                    <option value="Mymensing" selected>
                      Mymensing
                    </option>
                    <option value="Rajshahi" selected>
                      Rajshahi
                    </option>
                    <option value="Sylhet" selected>
                      Sylhet
                    </option>
                    <option value="Chattogram" selected>
                      Chattogram
                    </option>
                    <option value="Barishal" selected>
                      Barishal
                    </option>
                    <option value="Rangpur" selected>
                      Rangpur
                    </option>
                    <option value="Khulna" selected>
                      Khulna
                    </option>
                  </select>
                </div>
                <div className="item">
                  <input type="submit" value="Search" />
                </div>
              </form>
              <hr />
              <div className="show_all">
                <button onClick={() => setShowbios(biodatas)} className="btn btn-light">Show All</button>
              </div>
            </div>
            <div className="biodata__items feature__cards">
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
              {showbios?.map((item, index) => (
                <Fragment key={`biodatas-${index}`}>
                  <div className="item">
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
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Biodatas;
