import error from "./error";

export default function errorHandler(_error: any) {
  return JSON.stringify(error(_error.response.data));
}
