import { Form } from "react-bootstrap";
import HeaderSection from "../Components/HeaderSection";

export default function ResetPassword() {
  return (
    <div>
      <HeaderSection title="Reset Password" />
      <form className="mt-4">
        <div className="my-3">
          <Form.Control size="lg" type="text" placeholder="Enter Your Email" />
        </div>
        <div className="my-3">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Verification"
          />
        </div>
        <div className="my-3">
          <Form.Control
            size="lg"
            type="password"
            placeholder="Enter your New Password"
          />
        </div>
        <div className="my-3">
          <Form.Control
            size="lg"
            type="password"
            placeholder="Confirm New Password"
          />
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
