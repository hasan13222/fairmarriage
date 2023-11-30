import { useContext } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { AuthContext } from "./../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ContReq = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    isFetching,
    isLoading,
    refetch,
    data: reqbios,
  } = useQuery({
    queryKey: ["reqbios", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contactRequests?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    axiosPublic.delete(`/contactRequests/${id}`)
    .then(res => {
      if(res.data){
        refetch();
      }
    })
  }

  return (
    <>
      <div className="content">
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
        {reqbios?.length === 0 && <h3>You have No Request</h3>}
        {reqbios?.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Biodata Id</th>
                <th>Status</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {reqbios?.map(item => (
                    <>
                        <tr>
                            <td>{item?.name}</td>
                            <td>{item?.biodataId}</td>
                            <td>{item?.status}</td>
                            <td>{item?.status === 'approved' && item?.biodataMobile}</td>
                            <td>{item?.status === 'approved' && item?.biodataEmail}</td>
                            <td><button onClick={() => handleDelete(item?.biodataId)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    </>
                ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default ContReq;
