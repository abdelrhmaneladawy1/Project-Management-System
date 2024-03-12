import { Table } from "react-bootstrap";
import Pagination from "../../SharedModule/Components/Pagination/Pagination";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export default function TasksList({
  setonPress,
  totalNumberOfPages,
  tasksData,
  handleShow,
}) {
  const handleFilterName = (e: string) => {
    console.log(e);
  };
  const list = tasksData?.data?.map((task) => {
    const creationDate = new Date(task.creationDate);
    const formattedDate = `${creationDate.getFullYear()}/${
      creationDate.getMonth() + 1
    }/${creationDate.getDate()}`;

    return (
      <tr className="" key={task.id}>
        <th>{task.title}</th>
        <th>{task.status}</th>
        <th>{task.employee.userName}</th>
        <th>{task.project.title}</th>
        <th>{formattedDate}</th>
        <td>
          <button
            className="btn  text-danger"
            onClick={() => {
              handleShow(task.id);
            }}
          >
            <MdDeleteOutline style={{ fontSize: "30px" }} />
          </button>
          <button className="btn text-success">
            <Link
              to={`/dashboard/edit-task/${task?.id}/ ${task?.title}/${task.description}/${task.project.id}/${task.employee.userName}`}
              className="text-success"
            >
              <FaEdit style={{ fontSize: "30px" }} />
            </Link>
          </button>
        </td>
      </tr>
    );
  });

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
      <Table responsive bordered hover>
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
        <tbody>{list}</tbody>
      </Table>
      <Pagination
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
      />
    </>
  );
}
