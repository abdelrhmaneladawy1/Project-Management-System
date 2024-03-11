import { Button, Modal } from "react-bootstrap";
import { deleteProject, getProjects } from "../../../Api/Projects/Projects";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function DeleteModal({ show, handleClose, id }) {
  const dispatch = useDispatch();

  const handleDelete = (id: any) => {
    console.log("Delete id = ", id);
    dispatch(deleteProject(id)).then(() => {
      toast.success("Deleted successfully");
      handleClose();
      dispatch(getProjects({}));
    });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
