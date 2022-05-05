export interface LoginData {
  username: string;
  password: string;
  title: string;
  description: string;
}
export interface LoginPageState {
  data?: LoginData | undefined;
  loading: boolean;
  error?: string | undefined;
}
