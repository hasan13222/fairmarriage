import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Table } from "react-bootstrap";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const ViewBio = () => {
  const { selfBio } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const notify = () => toast("Your Request submitted successfully");

  const handlePremium = () => {
    const request = {
      name: selfBio?.name,
      biodataId: selfBio?.bioId,
      email: selfBio?.email,
      status: "pending",
    };

    Swal.fire({
      title: "are you sure to make your biodata premium?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.post("/premiumRequests", request).then((response) => {
          if (response.data) {
            notify();
          }
        });
      }
    });
  };
  return (
    <>
      <div className="content">
        <div className="bioDetails_main">
          <div className="img_wrapper">
            <h3>Biodata of {selfBio?.name}</h3>
            <img src={selfBio?.profile_image} alt="profile Picture" />
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
                <td>{selfBio?.bioId}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{selfBio?.name}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{selfBio?.bioType}</td>
              </tr>
              <tr>
                <th>Date Of Birth</th>
                <td>{selfBio?.birth_date}</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{selfBio?.height}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{selfBio?.weight}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{selfBio?.age}</td>
              </tr>
              <tr>
                <th>Occupation</th>
                <td>{selfBio?.occupation}</td>
              </tr>
              <tr>
                <th>Race</th>
                <td>{selfBio?.race}</td>
              </tr>
              <tr>
                <th>Father&apos;s Name</th>
                <td>{selfBio?.Father_name}</td>
              </tr>
              <tr>
                <th>Mother&apos;s Name</th>
                <td>{selfBio?.mother_name}</td>
              </tr>
              <tr>
                <th>Permanent Division</th>
                <td>{selfBio?.perm_division}</td>
              </tr>
              <tr>
                <th>Present Division</th>
                <td>{selfBio?.present_division}</td>
              </tr>
              <tr>
                <th>Expected Partner Age</th>
                <td>{selfBio?.age}</td>
              </tr>
              <tr>
                <th>Expected Partner Height</th>
                <td>{selfBio?.expected_partner_height}</td>
              </tr>
              <tr>
                <th>Expected Partner Weight</th>
                <td>{selfBio?.expected_partner_weight}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{selfBio?.email}</td>
              </tr>
              <tr>
                <th>Mobile</th>
                <td>{selfBio?.mobile}</td>
              </tr>

              <tr>
                <td colSpan="2">
                  <button onClick={handlePremium} className="btn btn-light">
                    Make Biodata Premium
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ViewBio;
