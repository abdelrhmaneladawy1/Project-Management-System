import { Outlet } from "react-router-dom";
import AuthLogo from "../../../assets/Images/AuthLogo.svg";
import { useLocation } from "react-router-dom";

export default function AuthLayout() {
  let location = useLocation();

  return (
    <>
      <div className="auth-container  container-fluid  ">
        <div className="  row vh-100 justify-content-center align-items-center">
          <div className=" p-5   col-md-6 bg-overlay rounded ">
            <img
              width="300px"
              className="d-block m-auto"
              src={AuthLogo}
              alt="logo"
            />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
