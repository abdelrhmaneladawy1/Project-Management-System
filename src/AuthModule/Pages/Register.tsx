import { Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../../Api/Auth/Auth";
import HeaderSection from "../Components/HeaderSection";
import { IRegisterInputs } from "../../Interfaces/Auth/Auth";
import { useState } from "react";
import RegisterPhoto from "../../assets/Images/img-icon.png";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const catchSelectedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];

    if (file) setSelectedImage(URL.createObjectURL(file));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterInputs>();
  const onSubmit: SubmitHandler = (data) => {
    const addFormData = new FormData();
    addFormData.append("userName", data["userName"]);
    addFormData.append("email", data["email"]);
    addFormData.append("country", data["country"]);
    addFormData.append("phoneNumber", data["phoneNumber"]);
    addFormData.append("profileImage", data["profileImage"][0]);
    addFormData.append("password", data["password"]);
    addFormData.append("confirmPassword", data["confirmPassword"]);
    dispatch(fetchRegister({ addFormData, navigate }));
  };

  return (
    <>
      <HeaderSection title="Create New Account" />
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className=" form-group text-center my-3 uploadContainer ">
          <input
            className="form-lable d-none"
            {...register("profileImage", {})}
            type="file"
            id="imageInput"
            onChange={catchSelectedImage}
            placeholder="add Image"
          />
          <label htmlFor="imageInput" className="btn cursor-pointer w-100 ">
            <img
              className="rounded-circle"
              src={selectedImage ? selectedImage : RegisterPhoto}
              alt="Preview Image"
              width="100%"
              height="100%"
            />
          </label>
        </div>

        <div className="  d-flex row  w-100">
          <div className="col-md-6 my-2 ">
            <Form.Control
              {...register("userName", {
                required: true,
              })}
              size="lg"
              type="text"
              placeholder="Enter your name"
            />
            {errors.userName && errors.userName.type === "required" && (
              <span className="text-danger my-2">Name is required</span>
            )}
          </div>
          <div className="col-md-6 my-2">
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
        </div>
        <div className=" d-flex row w-100">
          <div className="col-md-6 my-2">
            <Form.Control
              {...register("country", {
                required: true,
              })}
              size="lg"
              type="text"
              placeholder="Enter your country"
            />
            {errors.country && errors.country.type === "required" && (
              <span className="text-danger my-2">Country is required</span>
            )}
          </div>
          <div className="col-md-6 my-2">
            <Form.Control
              {...register("phoneNumber", {
                required: true,
              })}
              size="lg"
              type="text"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
              <span className="text-danger my-2">phone number is required</span>
            )}
          </div>
        </div>
        <div className=" d-flex row w-100">
          <div className="col-md-6 my-2">
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
          <div className="col-md-6 my-2">
            <Form.Control
              {...register("confirmPassword", {
                required: true,
              })}
              size="lg"
              type="password"
              placeholder="Confirm New Password"
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type === "required" && (
                <span className="text-danger my-2">
                  Confirm Password is required
                </span>
              )}
          </div>
        </div>

        <div className="my-2">
          <button
            type="submit"
            className="btn text-white bg w-50 d-block m-auto "
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
}
