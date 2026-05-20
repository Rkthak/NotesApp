//~ create context
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NotesContext = createContext();

//~ provide context
export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
