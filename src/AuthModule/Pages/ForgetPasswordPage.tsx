import { Form } from "react-bootstrap";
import HeaderSection from "../Components/HeaderSection";

export default function ForgetPasswordPage() {
  return (
    <>
      <HeaderSection title="Forget Password" />
      <form className="mt-4">
        <div className="my-3">
          <Form.Control size="lg" type="email" placeholder="Enter Your Email" />
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
