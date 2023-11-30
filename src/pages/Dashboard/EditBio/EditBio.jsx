import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "./../../../Providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";

const EditBio = () => {
  const { user, selfBio, setSelfBio } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  
  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const birth_date = form.birthdate.value;
    const height = form.height.value;
    const expected_partner_height = form.partner_height.value;
    const weight = form.weight.value;
    const expected_partner_weight = form.partner_weight.value;
    const race = form.race.value;
    const Father_name = form.father_name.value;
    const mother_name = form.mother_name.value;
    const perm_division = form.perm_division.value;
    const present_division = form.present_division.value;
    const age = form.age.value;
    const expected_partner_age = form.partner_age.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const occupation = form.occupation.value;
    const bioType = form.biotype.value;
    const profile_image = form.pro_image.value;
    const myBioData = {
      name,
      birth_date,
      height,
      expected_partner_height,
      weight,
      expected_partner_weight,
      race,
      Father_name,
      mother_name,
      perm_division,
      present_division,
      age,
      expected_partner_age,
      email,
      mobile,
      occupation,
      bioType,
      profile_image,
    }
    if (!selfBio) {
      axiosPublic.post("/biodatas", myBioData)
      .then(response => {
        setSelfBio(response.data);
        toast("Saved successfully")
      })
    } else {
      axiosPublic.patch(`/biodatas/${selfBio?.bioId}`, myBioData)
      .then(response => {
        setSelfBio(response.data);
        toast("Saved successfully")
      })
    }
  };
  return (
    <>
      <div className="content">
        <Form onSubmit={handleSave}>
          <Form.Group className="mb-3" controlId="biotype">
            <Form.Label>Biodata Type</Form.Label>
            <Form.Control
              defaultValue={selfBio?.bioType}
              type="text"
              name="biotype"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={selfBio?.name}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="pro_image">
            <Form.Label>Profile Image Link</Form.Label>
            <Form.Control
              defaultValue={selfBio?.profile_image}
              type="text"
              name="pro_image"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="birthdate">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              defaultValue={selfBio?.birth_date}
              type="date"
              name="birthdate"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="height">
            <Form.Label>Height (ft)</Form.Label>
            <Form.Select
              value={selfBio?.height}
              name="height"
            >
              <option value="">Select...</option>
              <option value="4.5">below 5</option>
              <option value="5">5</option>
              <option value="5.5">5.5</option>
              <option value="6">6</option>
              <option value="6.5">above 6</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="weight">
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Select
              value={selfBio?.weight}
              name="weight"
            >
              <option value="">Select...</option>
              <option value="45">below 50</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="70">70</option>
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="85">above 80</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control defaultValue={selfBio?.age} type="text" name="age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="occupation">
            <Form.Label>Occupation</Form.Label>
            <Form.Select value={selfBio?.occupation} name="occupation">
              <option value="">Select...</option>
              <option value="job">Job</option>
              <option value="business">Business</option>
              <option value="others">Others</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="race">
            <Form.Label>race</Form.Label>
            <Form.Select value={selfBio?.race} name="race">
              <option value="">Select...</option>
              <option value="job">NA</option>
              <option value="job">Brahmin</option>
              <option value="job">Kshatriya</option>
              <option value="job">Vaishya</option>
              <option value="job">Shudra</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="father_name">
            <Form.Label>Father&apos;s Name</Form.Label>
            <Form.Control
              defaultValue={selfBio?.Father_name}
              type="text"
              name="father_name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mother_name">
            <Form.Label>Mother&apos;s Name</Form.Label>
            <Form.Control
              defaultValue={selfBio?.mother_name}
              type="text"
              name="mother_name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="perm_division">
            <Form.Label>Permanent Division</Form.Label>
            <Form.Select
              value={selfBio?.perm_division}
              name="perm_division"
            >
              <option value="">Select...</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barishal">Barishal</option>
              <option value="Mymensing">Mymensing</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="present_division">
            <Form.Label>Present Division</Form.Label>
            <Form.Select
              value={selfBio?.present_division}
              name="present_division"
            >
              <option value="">Select...</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barishal">Barishal</option>
              <option value="Mymensing">Mymensing</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="partner_age">
            <Form.Label>Expected partner Age</Form.Label>
            <Form.Control
              defaultValue={selfBio?.Father_name}
              type="text"
              name="partner_age"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="partner_height">
            <Form.Label>Expected partner Height (ft)</Form.Label>
            <Form.Select
              value={selfBio?.expected_partner_height}
              name="partner_height"
            >
              <option value="">Select...</option>
              <option value="4.5">below 5</option>
              <option value="5">5</option>
              <option value="5.5">5.5</option>
              <option value="6">6</option>
              <option value="6.5">above 6</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="partner_weight">
            <Form.Label>Expected partner Weight (kg)</Form.Label>
            <Form.Select
              value={selfBio?.expected_partner_weight}
              name="partner_weight"
            >
              <option value="">Select...</option>
              <option value="45">below 50</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="70">70</option>
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="85">above 80</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              readOnly
              defaultValue={user?.email}
              type="email"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              defaultValue={selfBio?.mobile}
              type="text"
              name="mobile"
            />
          </Form.Group>
          <Button variant="light" type="submit">
            Save and Publish
          </Button>
        </Form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default EditBio;
