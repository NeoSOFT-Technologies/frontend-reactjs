import apiFactory from "../utils/api-factory";

export const validateUserLoginCredentials = async () => {
  const response = await apiFactory().get(
    "/global/mock-data/loginCredentials.json"
  );
  return response.data;
};
