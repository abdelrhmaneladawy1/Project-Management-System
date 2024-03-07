import { useTranslation } from "react-i18next";
import { IoIosLogOut } from "react-icons/io";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
export default function SidebarEmployee({ handleToggle, logo, handleLogout }) {
  const { t, i18n } = useTranslation();

  return (
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
  );
}
