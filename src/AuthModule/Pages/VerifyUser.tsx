import { useNavigate } from "react-router-dom";
import HeaderSection from "../Components/HeaderSection";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchVerify } from "../../Api/Auth/Auth";
import { Form } from "react-bootstrap";
import { IVerifyInputs } from "../../Interfaces/Auth/Auth";

export default function VerifyUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVerifyInputs>();
  const onSubmit: SubmitHandler<IVerifyInputs> = (data) => {
    dispatch(fetchVerify({ data, navigate }));
  };
  return (
    <>
      <HeaderSection title="Verify Account" />
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
            {...register("code", {
              required: true,
            })}
            size="lg"
            type="text"
            placeholder="Enter Verification"
          />
          {errors.code && errors.code.type === "required" && (
            <span className="text-danger my-2">Verification is required</span>
          )}
        </div>

        <div className="">
          <button type="submit" className="btn text-white bg w-100 ">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
