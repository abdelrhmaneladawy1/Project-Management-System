import { useDispatch, useSelector } from "react-redux";
import SubHeader from "../../SharedModule/Components/SubHeader/SubHeader";
import TasksList from "../Components/TasksList";
import { useEffect, useState } from "react";
import { deleteTask, getTasks } from "../../Api/Tasks/Tasks";
import { Button, Modal } from "react-bootstrap";
import deleteImg from "../../assets/Images/delete.jpg";
import { toast } from "react-toastify";

export default function TasksPage() {
  const dispatch = useDispatch();
  const [onPress, setonPress] = useState(null);
  const [filterName] = useState("");

  const { tasksData } = useSelector((state) => state.TasksReducer);
  const totalNumberOfPages = tasksData?.totalNumberOfPages;
  const [id, setId] = useState<string | undefined>();
  const [show, setShow] = useState(false);
  const handleShow = (taskId: string) => {
    setId(taskId);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleDelete = (task: string) => {
    dispatch(deleteTask(id)).then(() => {
      setShow(false);
      toast.success("Task deleted successfully");
      dispatch(getTasks({}));
    });
  };

  useEffect(() => {
    dispatch(getTasks({ onPress, filterName }));
  }, [dispatch, filterName, onPress]);

  return (
    <div>
      <SubHeader
        title="Tasks"
        btnName="Add New Task"
        btnLink="/dashboard/add-task"
      />
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

      <TasksList
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
        tasksData={tasksData}
        handleShow={handleShow}
      />
    </div>
  );
}
