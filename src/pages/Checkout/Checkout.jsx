import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

import './checkout.css'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const { user, selfBio } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  
  const { biodataId } = useParams();
  const notify = () => toast("Your Request submitted successfully");

  const {
    data: bioSingle,
  } = useQuery({
    queryKey: ["biodataDetailsInCheckout", biodataId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${biodataId}`);
      return res.data;
    },
  });
  
  const handleContactReq = (e) => {
    e.preventDefault();
    const form = e.target;
    const stripeCard = form.stripeCard.value;
    const newRequest = {
      biodataId,
      selfBioId: selfBio?.bioId,
      email: user?.email,
      stripeCard,
      status: 'pending',
      biodataEmail: bioSingle?.email,
      biodataMobile: bioSingle?.mobile,
      name: bioSingle?.name
    }
    axiosPublic.post('/contactRequests', newRequest)
    .then((response) => {
      if(response.data){
        notify();
        form.reset();
      }
    })
  }

  return (
    <>
      <div className="checkout container-fluid">
        <Container>
          <Form onSubmit={handleContactReq}>
            <Form.Group className="mb-3" controlId="biodataId">
              <Form.Label>BioData Id</Form.Label>
              <Form.Control type="text" readOnly defaultValue={biodataId} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="selfBiodataId">
              <Form.Label>Self BioData Id</Form.Label>
              <Form.Control type="text" readOnly defaultValue={selfBio?.bioId} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="selfEmail">
              <Form.Label>Self Email</Form.Label>
              <Form.Control type="email" readOnly defaultValue={user?.email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="stripeCard">
              <Form.Label>Stripe Card Number</Form.Label>
              <Form.Control title="Please enter a correct card number" required pattern="\b\d{14}\b|\b\d{16}\b|\b\d{19}\b" type="text" name="stripeCard" />
            </Form.Group>

            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Checkout;
