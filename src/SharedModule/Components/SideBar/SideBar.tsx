import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Images/AuthLogo.svg";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("role");
    navigate("/login");
  };
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <div className="sidebar-container   ">
        <Sidebar
          collapsed={isCollapsed}
          rtl={i18n.language == "ar" ? true : false}
        >
          {localStorage.getItem("role") === "Manager" ? (
            <Menu className="  ">
              <li className="" onClick={handleToggle}>
                <img className="w-100 my-4" src={logo} alt="logo" />
              </li>
              <MenuItem
                icon={<IoMdHome className="" />}
                component={<Link to="/dashboard" />}
              >
                {t("home")}
              </MenuItem>
              <MenuItem
                icon={<LuUsers2 className="" />}
                component={<Link to="/dashboard/users" />}
              >
                {t("users")}
              </MenuItem>
              <MenuItem
                icon={<GrProjects className="" />}
                component={<Link to="/dashboard/projects" />}
              >
                {" "}
                {t("projects")}
              </MenuItem>
              <MenuItem
                icon={<FaTasks />}
                component={<Link to="/dashboard/tasks" />}
              >
                {" "}
                {t("tasks")}
              </MenuItem>

              <MenuItem
                icon={<IoIosLogOut className="   text-danger" />}
                onClick={handleLogout}
              >
                {t("logout")}
              </MenuItem>
            </Menu>
          ) : (
            <>
              <Menu className="  ">
                <li className="" onClick={handleToggle}>
                  <img className="w-100 my-4" src={logo} alt="logo" />
                </li>
                <MenuItem
                  icon={<i className="fa fa-home"></i>}
                  component={<Link to="/dashboard" />}
                >
                  {" "}
                  {t("home")}
                </MenuItem>
                <MenuItem
                  icon={<i className="fa-solid fa-burger "></i>}
                  component={<Link to="/dashboard/recipes" />}
                >
                  {" "}
                  {t("recipes")}
                </MenuItem>
                <MenuItem
                  icon={<IoIosLogOut className=" text-white" />}
                  onClick={handleLogout}
                >
                  {t("logout")}
                </MenuItem>
              </Menu>
            </>
          )}
        </Sidebar>
      </div>
    </>
  );
}
