export interface LoginData {
  username: string;
  password: string;
  title: string;
  description: string;
}
export interface LoginPageState {
  data?: LoginData;
  loading: boolean;
  error?: string;
}
