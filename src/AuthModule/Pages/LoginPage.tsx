import { Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HeaderSection from "../Components/HeaderSection";
import { ILoginInputs } from "../../Interfaces/Auth/Auth";
import { fetchDataLogin } from "../../Api/Auth/Auth";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>();
  const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
    dispatch(fetchDataLogin({ data, navigate }));
  };

  return (
    <>
      <HeaderSection title="Login" />
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3">
          <Form.Control
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            size="lg"
            type="email"
            placeholder="Enter Your Email"
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-danger my-2">Email is required</span>
          )}
        </div>
        <div className="my-3">
          <Form.Control
            {...register("password", {
              required: true,
            })}
            size="lg"
            type="password"
            placeholder="Enter your Password"
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-danger my-2">Password is required</span>
          )}
        </div>
        <div className="my-3 d-flex justify-content-between main-color ">
          <span className="pointer">
            <Link className="main-color " to="">
              Register Now ?
            </Link>
          </span>
          <span className="pointer ">
            <Link className="main-color " to="/forget-password">
              Forget Password ?
            </Link>
          </span>
        </div>
        <div className="">
          <button type="submit" className="btn text-white bg w-100 ">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
