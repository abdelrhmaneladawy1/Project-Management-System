import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import SubHeader from "../../SharedModule/Components/SubHeader/SubHeader";
import { toast } from "react-toastify";
import { updateProject } from "../../Api/Projects/Projects";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function EditProject() {
  const { id, title, description } = useParams();
  console.log({ title });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    dispatch(updateProject({ data, id })).then(() => {
      toast.success("Project Edited successfully");
      navigate("/dashboard/projects");
    });
  };
  useEffect(() => {
    setValue("title", title);
    setValue("description", description);
  }, [description, setValue, title]);

  return (
    <>
      <SubHeader
        title="Edit Project"
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
            <button className="btn bg-warning text-white">Edit</button>
          </div>
        </div>
      </form>
    </>
  );
}
