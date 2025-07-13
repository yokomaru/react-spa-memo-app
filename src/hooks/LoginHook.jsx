import { createContext, useState, useContext } from 'react';

const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <LoginContext value={{ login, setLogin }}>
      {children}
    </LoginContext>
  );
};

export const useLogin = () => useContext(LoginContext);
