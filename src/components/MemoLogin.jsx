import { useLogin } from '../hooks/LoginHook.jsx';

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
