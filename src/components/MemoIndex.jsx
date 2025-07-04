import { useMemo } from 'react';
import Memo from './Memo.jsx';

export default function MemoIndex({
  memos,
  editingMemoID,
  handleMemoClick,
  handleAddButtonClick,
}) {
  const visibleMemos = useMemo(() => memos, [memos]);
  return (
    <>
      <ul className="memos">
        {visibleMemos.map((memo) => (
          <li key={memo.id} className="memo">
            <Memo
              memo={memo}
              editingMemoID={editingMemoID}
              handleMemoClick={handleMemoClick}
            />
          </li>
        ))}
      </ul>
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
    </>
  );
}
