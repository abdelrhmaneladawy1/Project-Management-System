import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Images/AuthLogo.svg";
import SidebarEmployee from "./SidebarEmployee";
import SidebarManager from "./SidebarManager";
export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
            <SidebarManager
              handleToggle={handleToggle}
              logo={logo}
              handleLogout={handleLogout}
            />
          ) : (
            <SidebarEmployee
              handleToggle={handleToggle}
              logo={logo}
              handleLogout={handleLogout}
            />
          )}
        </Sidebar>
      </div>
    </>
  );
}
