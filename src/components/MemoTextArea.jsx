import { useLogin } from '../hooks/LoginHook.jsx';

export default function MemoTextArea({ editingMemo, setEditingMemo }) {
  const { login } = useLogin();
  return (
    <div>
      <textarea
        className={'memo-textarea'}
        readOnly={login ? false : true}
        value={editingMemo.content}
        onChange={(e) =>
          setEditingMemo({ ...editingMemo, content: e.target.value })
        }
      />
    </div>
  );
}
