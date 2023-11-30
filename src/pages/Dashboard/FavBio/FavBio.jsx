import { useContext } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { AuthContext } from "./../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const FavBio = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    isFetching,
    isLoading,
    refetch,
    data: favbios,
  } = useQuery({
    queryKey: ["favbios", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/favourites?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    axiosPublic.delete(`/favourites/${id}`)
    .then(res => {
      if(res.data){
        console.log(res.data);
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
        {favbios?.length === 0 && <h3>You have No Favourites</h3>}
        {favbios?.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Biodata Id</th>
                <th>Permanent Address</th>
                <th>Occupation</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {favbios?.map(item => (
                    <>
                        <tr>
                            <td>{item?.name}</td>
                            <td>{item?.biodataId}</td>
                            <td>{item?.perm_division}</td>
                            <td>{item?.occupation}</td>
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

export default FavBio;
