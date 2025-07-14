import { useState } from 'react';
import { LoginContext } from './useLogin.js';

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  return <LoginContext value={{ login, setLogin }}>{children}</LoginContext>;
};
