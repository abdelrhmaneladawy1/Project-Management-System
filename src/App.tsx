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
import AddProject from "./ProjectsModule/Components/AddProject";
import EditProject from "./ProjectsModule/Components/EditProject";
import AddTask from "./TasksModule/Components/AddTask";
import EditTask from "./TasksModule/Components/EditTask";

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
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "add-project",
        element: <AddProject />,
      },
      {
        path: "edit-project/:id/:title/:description",
        element: <EditProject />,
      },
      { path: "tasks", element: <TasksPage /> },
      { path: "add-task", element: <AddTask /> },
      {
        path: "edit-task/:id/:title/:description/:user/:project",
        element: <EditTask />,
      },
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
