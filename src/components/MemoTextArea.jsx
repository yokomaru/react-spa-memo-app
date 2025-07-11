import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext.js';

export default function MemoTextArea({ editingMemo, setEditingMemo }) {
  const login = useContext(LoginContext);
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
