import {
  toast,
  ToastContainerProps,
  TypeOptions,
  ToastOptions,
  ToastPosition,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config: ToastContainerProps = {
  limit: 1,
};
const autoCloseTime: number | false = 5000;

toast.configure(config);

const ToastAlert = (
  message: string,
  type: TypeOptions,
  time: number | false = autoCloseTime,
  position: ToastPosition = "bottom-right",
  onOpen?: <T = {}>(props: T) => void,
  onClose?: <T = {}>(props: T) => void
) => {
  const options: ToastOptions = {
    type,
    position,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    onOpen,
    onClose,
  };

  return toast(message, options);
};

export default ToastAlert;
