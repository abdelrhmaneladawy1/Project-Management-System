import { jwtDecode } from "jwt-decode";

export const saveAuthData = () => {
  if (localStorage.getItem("AuthToken")) {
    const encodedToken: any = localStorage.getItem("AuthToken");
    const decodedToken: any = jwtDecode(encodedToken);
    const role = decodedToken.roles[0];
    localStorage.setItem("role", role);
  }
};
