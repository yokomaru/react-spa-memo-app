import { useLogin } from '../hooks/useLogin.js';

export default function MemoLogin() {
  const { login, setLogin } = useLogin();

  return (
    <>
      <div className="header">
        <button
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login ? 'ログアウト' : 'ログイン'}
        </button>
      </div>
    </>
  );
}
