import { LandingDetails } from "../landing-page";

export interface LandingPageState {
  data?: LandingDetails | undefined;
  loading: boolean;
  error?: string | undefined;
}
export interface LoginData {
  username: string;
  password: string;
}
export interface LoginPageState {
  data?: LandingDetails | undefined;
  loading: boolean;
  error?: string | undefined;
}
