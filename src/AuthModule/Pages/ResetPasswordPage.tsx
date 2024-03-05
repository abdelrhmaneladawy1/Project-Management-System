import { Form } from "react-bootstrap";
import HeaderSection from "../Components/HeaderSection";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { IResetPassword } from "../../Interfaces/Auth/Auth";
import { fetchResetPassword } from "../../Api/Auth/Auth";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<IResetPassword> = (data) => {
    dispatch(fetchResetPassword({ data, navigate }));
  };

  return (
    <div>
      <HeaderSection title="Reset Password" />
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3">
          <Form.Control
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            size="lg"
            type="text"
            placeholder="Enter Your Email"
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-danger my-2">Email is required</span>
          )}
        </div>
        <div className="my-3">
          <Form.Control
            {...register("seed", {
              required: true,
            })}
            size="lg"
            type="text"
            placeholder="Enter Verification"
          />
          {errors.seed && errors.seed.type === "required" && (
            <span className="text-danger my-2">Verification is required</span>
          )}
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="New Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-danger my-2">new Password isRequired</span>
          )}
        </div>
        <div className="form-group mb-2">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="confirm New Password"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <span className="text-danger my-2">confirm New Password</span>
            )}
        </div>
        <div className="">
          <button type="submit" className="btn text-white bg w-100  ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
