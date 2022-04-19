import httpclient from "../utils/api";

export const validateUserLoginCredentials = async (
  username: string,
  password: string
) => {
  const data = await httpclient().get(
    "/global/mock-data/loginCredentials.json"
  );
  console.log(data, username, password);
  return data;
};
