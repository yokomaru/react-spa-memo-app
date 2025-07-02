import Memo from './Memo.jsx';

export default function MemoIndex({ memos, handleMemoClick, handleAddButtonClick }) {
  return (
    <section>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <Memo memo={memo} handleMemoClick={handleMemoClick} />
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            handleAddButtonClick(memos);
          }}
        >
          +
        </button>
      </div>
    </section>
  );
}
