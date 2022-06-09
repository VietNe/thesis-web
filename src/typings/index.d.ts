interface LoginInput {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  data: any;
}
