import { useDispatch, useSelector } from "react-redux";
import SubHeader from "../../SharedModule/Components/SubHeader/SubHeader";
import TasksList from "../Components/TasksList";
import { useEffect, useState } from "react";
import { getTasks } from "../../Api/Tasks/Tasks";

export default function TasksPage() {
  const dispatch = useDispatch();
  const [onPress, setonPress] = useState(null);
  const [filterName, setFilterName] = useState("");

  const { tasksData } = useSelector((state) => state.TasksReducer);
  const totalNumberOfPages = tasksData?.totalNumberOfPages;
  console.log(tasksData);

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
      <TasksList
        setonPress={setonPress}
        totalNumberOfPages={totalNumberOfPages}
      />
    </div>
  );
}
