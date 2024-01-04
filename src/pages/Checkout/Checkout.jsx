import { useContext } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./checkout.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Checkout = () => {
  const { user, selfBio } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const stripe = useStripe();
  const elements = useElements();

  const { biodataId } = useParams();
  const notify = () =>
    toast("Payment Completed and Your Request submitted to admin successfully");

  const { data: bioSingle } = useQuery({
    queryKey: ["biodataDetailsInCheckout", biodataId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${biodataId}`);
      return res.data;
    },
  });

  const handleContactReq = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[payment error]", error);
    } else {
      console.log("[stripe PaymentMethod]", paymentMethod);
    }

    const form = e.target;
    
    const newRequest = {
      biodataId,
      selfBioId: selfBio?.bioId,
      email: user?.email,
      amount: 500,
      status: "pending",
      biodataEmail: bioSingle?.email,
      biodataMobile: bioSingle?.mobile,
      name: bioSingle?.name,
    };
    axiosPublic.post("/contactRequests", newRequest).then((response) => {
      if (response.data) {
        console.log(response.data.clientSecret);
        stripe
          .confirmCardPayment(response.data.clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.displayName,
                email: user?.email,
              },
            },
          })
          .then(function (result) {
            if (result.error) {
              console.log(result.paymentIntent);
              console.log(result.error.message);
              toast("Failed", result.error.message);
            }
            if (result.paymentIntent) {
              console.log(result.paymentIntent);
              notify();
              form.reset();
            }
          });
      }
    });
  };

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
              <Form.Control
                type="text"
                readOnly
                defaultValue={selfBio?.bioId}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="selfEmail">
              <Form.Label>Self Email</Form.Label>
              <Form.Control type="email" readOnly defaultValue={user?.email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>Amount to pay</Form.Label>
              <Form.Control type="text" defaultValue="500" readOnly />
            </Form.Group>

            <FormGroup className="mb-3" controlId="stripeCardEl">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </FormGroup>

            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
