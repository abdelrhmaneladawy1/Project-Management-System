import { Table } from "react-bootstrap";
import Pagination from "../../SharedModule/Components/Pagination/Pagination";

export default function TasksList({ setonPress, totalNumberOfPages }) {
  const handleFilterName = (e: string) => {
    console.log(e);
  };
  return (
    <>
      <div className="form-group">
        <input
          type="text"
          placeholder="Filter By Name "
          className="form-control w-25 my-3"
          onChange={(e) => {
            handleFilterName(e.target.value);
          }}
        />
      </div>
      <Table responsive>
        <thead>
          <tr className="th-table">
            <th>Title</th>
            <th>Status</th>
            <th>User</th>
            <th>Project</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="th-table">
            <th>Title</th>
          </tr>
        </tbody>
      </Table>
      <Pagination
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
      />
    </>
  );
}
