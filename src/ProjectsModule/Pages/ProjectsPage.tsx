import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteProject, getProjects } from "../../Api/Projects/Projects";
import SubHeader from "../../SharedModule/Components/SubHeader/SubHeader";
import deleteImg from "../../assets/Images/delete.jpg";
import ProjectsList from "../Components/ProjectsList";

const ProjectsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { projectsData } = useSelector((state) => state.projectsReducer);
  const [onPress, setonPress] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [id, setId] = useState<string | undefined>();
  const [show, setShow] = useState(false);
  const handleShow = (projectId: string) => {
    setId(projectId);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleDelete = (projectId: string) => {
    dispatch(deleteProject(projectId)).then(() => {
      setShow(false);
      toast.success("Project deleted successfully");
      dispatch(getProjects({}));
    });
  };
  useEffect(() => {
    dispatch(getProjects({ onPress, filterName }));
  }, [dispatch, filterName, onPress]);
  return (
    <>
      <SubHeader
        title="Projects"
        btnName="Add New Project"
        btnLink="/dashboard/add-project"
      />
      <Container>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={deleteImg} width={200} alt="image delete " />
            <h5>Are you sure you want to delete this project?</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                handleDelete(id!);
              }}
            >
              Delete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <ProjectsList
          handleShow={handleShow}
          setonPress={setonPress}
          setFilterName={setFilterName}
          projectsData={projectsData}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;
