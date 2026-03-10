import { useState } from "react";

export const useCurrentField = () => {
  const [currentField, setCurrentField] = useState(null);

  return {
    currentField,
    setCurrentField,
  };
};
