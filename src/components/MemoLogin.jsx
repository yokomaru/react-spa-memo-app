import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext.js';

export default function MemoLogin() {
  const login = useContext(LoginContext);
  return (
    <>
      <div className="header">
        <button>{login ? 'ログアウト' : 'ログイン'}</button>
      </div>
    </>
  );
}
