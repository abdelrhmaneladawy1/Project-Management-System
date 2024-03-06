import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ForgetPassword, Login, ResetPassword } from "./AuthModule";
import DashboardPage from "./DashboardModule/Pages/DashboardPage";
import ProjectsPage from "./ProjectsModule/Pages/ProjectsPage";
import { AuthLayout, MasterLayout, NotFound } from "./SharedModule";
import ProtectedRoute from "./SharedModule/Components/ProtecteRoute/ProtectedRoute";
import Register from "./AuthModule/Pages/Register";
import VerifyUser from "./AuthModule/Pages/VerifyUser";
import UsersPage from "./UsersModule/Pages/UsersPage";
import TasksPage from "./TasksModule/Pages/TasksPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "verify-user", element: <VerifyUser /> },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <MasterLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "tasks", element: <TasksPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
