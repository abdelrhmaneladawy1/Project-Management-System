import { useTranslation } from "react-i18next";
import { FaTasks } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SidebarManager({ handleToggle, logo, handleLogout }) {
  const { t, i18n } = useTranslation();
  return (
    <>
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
        <MenuItem icon={<FaTasks />} component={<Link to="/dashboard/tasks" />}>
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
    </>
  );
}
