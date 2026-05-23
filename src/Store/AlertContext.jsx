/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AlertContext = createContext(null);

export const AlertContextProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, [showAlert]);

  return (
    <AlertContext.Provider
      value={{ showAlert, setShowAlert, alertMessage, setAlertMessage }}
    >
      {children}
    </AlertContext.Provider>
  );
};
