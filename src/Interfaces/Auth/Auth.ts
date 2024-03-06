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

export interface IRegisterInputs {
  userName: "string";
  email: "string";
  country: "string";
  phoneNumber: "string";
  profileImage: number;
  password: "string";
  confirmPassword: "string";
}
export interface IVerifyInputs {
  email: "string";
  code: "string";
}
