import { useQuery } from "@tanstack/react-query";
import { Button, Spinner, Table } from "react-bootstrap";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ApprContReq = () => {
    const axiosPublic = useAxiosPublic();

    const {
        isFetching,
        isLoading,
        refetch,
        data: apprContReq,
      } = useQuery({
        queryKey: ["ApprContRequests"],
        queryFn: async () => {
          const res = await axiosPublic.get("/apprContRequests");
          return res.data;
        },
      });

      const handleContactAppr = (email) => {
        axiosPublic.patch(`/contactRequests`, {email})
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
        {apprContReq?.length === 0 && <h3>You have No Request</h3>}
        {apprContReq?.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Biodata Id</th>
                <th>Approve Contact Request</th>
              </tr>
            </thead>
            <tbody>
                {apprContReq?.map(item => (
                    <>
                        <tr>
                            <td>{item?.name}</td>
                            <td>{item?.email}</td>
                            <td>{item?.biodataId}</td>
                            <td>{item?.status !== 'approved' ? (<button onClick={() => handleContactAppr(item?.email)} className="btn btn-danger">Approve Request</button>) : 'approved'}</td>
                        </tr>
                    </>
                ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  )
}

export default ApprContReq