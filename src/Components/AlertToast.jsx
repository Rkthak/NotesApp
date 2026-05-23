import { useContext } from "react";
import { AlertContext } from "../Store/AlertContext";

const AlertToast = () => {
  const { showAlert, setShowAlert, alertMessage } = useContext(AlertContext);

  const hjz = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div
      className={`${showAlert ? "flex" : "hidden"} absolute right-1.5 top-1.5 rounded min-w-50 px-4 py-1.5 bg-green-400   justify-between items-center `}
    >
      <p className="capitalize font-['sora'] text-slate-50">{alertMessage}</p>{" "}
      <span
        className="font-bold font-['inter'] text-2xl p-1 cursor-pointer"
        onClick={hjz}
      >
        X
      </span>
    </div>
  );
};

export default AlertToast;
