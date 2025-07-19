import { useMemo } from 'react';
import Memo from './Memo.jsx';
import { useLogin } from '../hooks/useLogin.js';

export default function MemoIndex({
  memos,
  editingMemo,
  handleMemoClick,
  handleAddButtonClick,
}) {
  const visibleMemos = useMemo(() => memos, [memos]);
  const { login } = useLogin();
  return (
    <>
      <ul className="memos">
        {visibleMemos.map((memo) => (
          <li key={memo.id} className="memo">
            <Memo
              memo={memo}
              editingMemo={editingMemo}
              handleMemoClick={handleMemoClick}
            />
          </li>
        ))}
      </ul>
      {login && (
        <div>
          <a
            className="add-memo"
            href="#"
            onClick={(e) => {
              handleAddButtonClick(e);
            }}
          >
            <span>+</span>
          </a>
        </div>
      )}
    </>
  );
}
