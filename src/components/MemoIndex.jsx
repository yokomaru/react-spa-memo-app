import Memo from './Memo.jsx';

export default function MemoIndex({
  memos,
  editingMemoID,
  handleMemoClick,
  handleAddButtonClick,
}) {
  return (
    <>
      <ul className="memos">
        {memos.map((memo) => (
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
          onClick={() => {
            handleAddButtonClick();
          }}
        >
          <span>+</span>
        </a>
      </div>
    </>
  );
}
