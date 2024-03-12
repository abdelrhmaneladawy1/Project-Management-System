import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { blockUser, getUsers } from "../../Api/Users/Users";
import Pagination from "../../SharedModule/Components/Pagination/Pagination";

export default function UsersList({
  setonPress,
  totalNumberOfPages,
  usersData,
  setFilterName,
  setFilterEmail,
}) {
  const handleFilterName = (e: string) => {
    setFilterName(e);
  };
  const handleFilterEmail = (e: string) => {
    setFilterEmail(e);
  };
  const dispatch = useDispatch();
  const handleBlock = (user: any) => {
    dispatch(blockUser({ user })).then(() => {
      dispatch(getUsers({}));
    });
  };

  const usersList = usersData?.data?.map((user: any) => {
    const creationDate = new Date(user.creationDate);
    const formattedDate = `${creationDate.getFullYear()}/${
      creationDate.getMonth() + 1
    }/${creationDate.getDate()}`;

    return (
      <tr key={user.id}>
        <td>{user?.userName}</td>
        <td>
          <div
            className={`${
              user?.isActivated === true ? "bg-success" : "bg-danger"
            } p-2 text-center text-white rounded-5 w-75`}
          >
            {user?.isActivated === true ? "Active" : "Not Active"}
          </div>
        </td>
        <td>{user?.phoneNumber}</td>
        <td>{user?.email}</td>
        <td>{formattedDate}</td>
        <td>
          <button
            onClick={() => {
              handleBlock(user);
            }}
            className="btn text-danger border-danger"
          >
            {user?.isActivated === true ? "Block" : "unblock"}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="form-group d-flex justify-content-center gap-5">
        <div className="col-md-5">
          <input
            type="text"
            placeholder="Filter By Name "
            className="form-control  my-3"
            onChange={(e) => {
              handleFilterName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            placeholder="Filter By Email "
            className="form-control  my-3"
            onChange={(e) => {
              handleFilterEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <Table responsive className="text-center">
        <thead>
          <tr className="th-table">
            <th>User Name</th>
            <th>Status</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </Table>
      <Pagination
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
      />
    </>
  );
}
