import { useForm } from "react-hook-form";
import SubHeader from "../../SharedModule/Components/SubHeader/SubHeader";
import { useDispatch } from "react-redux";
import { addProject } from "../../Api/Projects/Projects";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(addProject(data)).then(() => {
      toast.success("Project added successfully");
      navigate("/dashboard/projects");
    });
  };
  return (
    <>
      <SubHeader
        title="Add a New Project"
        subTitle="View All Projects"
        subTitleLink="/dashboard/projects"
      />
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
          <div className=" d-flex justify-content-between">
            <button
              className="btn border-1 border-black "
              onClick={() => {
                navigate("/dashboard/projects");
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
