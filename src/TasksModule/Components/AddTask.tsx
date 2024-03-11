import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addTask } from "../../Api/Tasks/Tasks";
import { useEffect } from "react";
import { getProjects } from "../../Api/Projects/Projects";

export default function AddTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectsData } = useSelector((state) => state.projectsReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(addTask(data)).then(() => {
      toast.success("Task added successfully");
      navigate("/dashboard/tasks");
    });
  };
  useEffect(() => {
    dispatch(getProjects({}));
  }, [dispatch]);
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
              {projectsData?.data?.map((item) => (
                <select className="form-control " key={item.id}>
                  <option>Select</option>
                  <option value={item.id}>{item.title}</option>
                </select>
              ))}
            </div>
            <div className="col-md-5">
              <select className="form-control ">
                <option>Default select</option>
              </select>
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
