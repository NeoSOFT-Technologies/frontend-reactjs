// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const error = (obj: any): string => {
  let message = "Undefined Error";
  if (obj && obj.message) {
    message = obj.message;
  }
  return message;
};

export default error;
