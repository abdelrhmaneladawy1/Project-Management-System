export interface ILoginInputs {
  email?: string;
  password?: string;
}
export interface IState {
  role?: string;
  data: [];
  loading: boolean;
}
export interface IResetPassword {
  email: "string";
  password: "string";
  confirmPassword: "string";
  seed: "string";
}
