import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Button, Spinner, Table } from "react-bootstrap";

const PremReq = () => {
    const axiosPublic = useAxiosPublic();

    const {
        isFetching,
        isLoading,
        refetch,
        data: premreq,
      } = useQuery({
        queryKey: ["premiumRequests"],
        queryFn: async () => {
          const res = await axiosPublic.get("/premiumRequests");
          return res.data;
        },
      });

      const handlePremium = (email) => {
        axiosPublic.patch(`/usersPremium`, {email})
        .then(res => {
          if(res.data){
            axiosPublic.patch(`/premiumRequests`, {email})
            .then(res => {
                if(res.data){
                    refetch();
                }
            })
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
        {premreq?.length === 0 && <h3>You have No Request</h3>}
        {premreq?.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Biodata Id</th>
                <th>Make Premium</th>
              </tr>
            </thead>
            <tbody>
                {premreq?.map(item => (
                    <>
                        <tr>
                            <td>{item?.name}</td>
                            <td>{item?.email}</td>
                            <td>{item?.biodataId}</td>
                            <td>{item?.status !== 'approved' ? (<button onClick={() => handlePremium(item?.email)} className="btn btn-danger">Make Premium</button>) : 'premium'}</td>
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

export default PremReq