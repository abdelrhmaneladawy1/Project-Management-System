import { Form } from "react-bootstrap";
import HeaderSection from "../Components/HeaderSection";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchDataForgetPass } from "../../Api/Auth/Auth";
import { ILoginInputs } from "../../Interfaces/Auth/Auth";

export default function ForgetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>();
  const onSubmit: SubmitHandler<ILoginInputs> = (userData) => {
    dispatch(fetchDataForgetPass({ userData, navigate }));
  };

  return (
    <>
      <HeaderSection title="Forget Password" />
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
        <div className="">
          <button type="submit" className="btn text-white bg w-100 ">
            Verify
          </button>
        </div>
      </form>
    </>
  );
}
