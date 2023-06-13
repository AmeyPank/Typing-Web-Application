import { createContext, useContext, useState } from "react";

const TestModeContext = createContext();

export const TestModeContextProvider = ({ children }) => {
  const [testTime, setTestTime] = useState(15);
  // const [testSeconds, setTestSeconds] = useState(15);
  // const [testWords, setTestWords] = useState(10); // 10 or 20 or 30

  const values = {
    testTime,
    setTestTime,
  };

  return (
    <TestModeContext.Provider value={values}>
      {children}
    </TestModeContext.Provider>
  );
};

export const useTestMode = () => useContext(TestModeContext);
