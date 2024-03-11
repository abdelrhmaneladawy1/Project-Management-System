import { Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { NoData } from "../../SharedModule";
import Pagination from "../../SharedModule/Components/Pagination/Pagination";

export default function ProjectsList({
  handleShow,
  setonPress,
  setFilterName,
  projectsData,
}: any) {
  const handleFilterName = (e: string) => {
    setFilterName(e);
  };
  const totalNumberOfPages = projectsData.totalNumberOfPages;

  const list = projectsData?.data?.map((project: any) => {
    const creationDate = new Date(project.creationDate);
    const formattedDate = `${creationDate.getFullYear()}/${
      creationDate.getMonth() + 1
    }/${creationDate.getDate()}`;

    return (
      <tr key={project.id}>
        <td>{project?.title}</td>
        <td>{project?.task[0]?.status}</td>
        <td>{project?.task.length}</td>
        <td>{formattedDate}</td>
        <td>
          <button
            className="btn  text-danger"
            onClick={() => {
              handleShow(project.id);
            }}
          >
            <MdDeleteOutline style={{ fontSize: "30px" }} />
          </button>
          <button className="btn text-success">
            <Link
              to={`/dashboard/edit-project/${project?.id}/ ${project?.title}/${project.description}`}
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
      {projectsData?.data?.length > 0 ? (
        <Table responsive>
          <thead>
            <tr className="th-table">
              <th>Title</th>
              <th>Status</th>
              <th>Num Tasks</th>
              <th>Data Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      ) : (
        <NoData />
      )}
      <Pagination
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
      />
    </>
  );
}
