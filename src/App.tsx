import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ForgetPassword, Login, ResetPassword } from "./AuthModule";
import DashboardPage from "./DashboardModule/Pages/DashboardPage";
import ProjectsPage from "./ProjectsModule/Pages/ProjectsPage";
import { AuthLayout, MasterLayout, NotFound } from "./SharedModule";
import ProtectedRoute from "./SharedModule/Components/ProtecteRoute/ProtectedRoute";

const router = createBrowserRouter([
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
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
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
