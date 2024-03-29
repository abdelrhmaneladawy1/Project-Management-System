import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addTask } from "../../Api/Tasks/Tasks";
import { useEffect, useState } from "react";
import { getProjects } from "../../Api/Projects/Projects";
import { getUsers } from "../../Api/Users/Users";
import Select from "react-select";

export default function AddTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectsData } = useSelector((state) => state.projectsReducer);
  const { usersData } = useSelector((state) => state.usersReducer);
  const [pageSize, setUserSize] = useState(250);

  console.log(usersData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(addTask(data)).then(() => {
      toast.success("Task added successfully");
      navigate("/dashboard/tasks");
    });
  };
  const userOptions = usersData?.data?.map((user) => ({
    value: user.id,
    label: user.userName,
  }));
  const handleUserChange = (user) => {
    setValue("employeeId", user.value);
  };
  useEffect(() => {
    dispatch(getProjects({}));
    dispatch(getUsers({ pageSize }));
  }, [dispatch, pageSize]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex justify-content-center"
      >
        <div className="form-group w-75 bg-white p-5 rounded-2  ">
          <input
            type="text"
            className="form-control "
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-danger ">Title Is Required</span>
          )}
          <textarea
            className="form-control my-3"
            placeholder="Description"
            rows={7}
            {...register("description", { required: true })}
          ></textarea>
          {errors.title && (
            <span className="text-danger ">Description Is Required</span>
          )}
          <div className="d-flex my-3 justify-content-between">
            <div className="col-md-5">
              <select
                className="form-control "
                {...register("projectId", { required: true })}
              >
                <option>Select</option>
                {projectsData?.data?.map((item) => (
                  <option value={item.id}>{item.title}</option>
                ))}
              </select>
              {errors.projectId && (
                <span className="text-danger ">Project Is Required</span>
              )}
            </div>
            <div className="col-md-5">
              <Select
                {...register("employeeId", {
                  required: true,
                })}
                className="text-black"
                options={userOptions}
                onChange={handleUserChange}
                placeholder="Search user..."
              />
              {errors.employeeId && (
                <span className="text-danger ">User Is Required</span>
              )}
            </div>
          </div>
          <div className=" d-flex justify-content-between">
            <button
              className="btn border-1 border-black "
              onClick={() => {
                navigate("/dashboard/tasks");
              }}
            >
              Cancel
            </button>
            <button className="btn bg-warning text-white">Create</button>
          </div>
        </div>
      </form>
    </>
  );
}
