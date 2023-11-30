import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Button, Spinner, Table } from "react-bootstrap";

const Users = () => {
    const axiosPublic = useAxiosPublic();

    
  const {
    isFetching,
    isLoading,
    refetch,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users`);
      return res.data;
    },
  });

  const handleAdmin = (email) => {
    axiosPublic.patch(`/usersAdmin`, {email})
    .then(res => {
      if(res.data){
        refetch();
      }
    })
  }

  const handlePremium = (email) => {
    axiosPublic.patch(`/usersPremium`, {email})
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
        {users?.length === 0 && <h3>You have No Request</h3>}
        {users?.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Biodata Email</th>
                <th>Make Admin</th>
                <th>Make Premium</th>
              </tr>
            </thead>
            <tbody>
                {users?.map(item => (
                    <>
                        <tr>
                            <td>{item?.userName}</td>
                            <td>{item?.email}</td>
                            <td>{item?.role === 'admin' ? 'admin' : (<button onClick={() => handleAdmin(item?.email)} className="btn btn-danger">Make Admin</button>)}</td>
                            <td>{item?.role !== 'admin' && item?.role !== 'premium' ? (<button onClick={() => handlePremium(item?.email)} className="btn btn-danger">Make Premium</button>) : 'premium'}</td>
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

export default Users