import React, { createContext } from "react";

function CheckProvider({ children }) {
  const [checked, setChecked] = useState(false);
  const checkProvider = createContext();
  
  return (

  );
}

export default CheckProvider;
