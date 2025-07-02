import Memo from './Memo.jsx';

export default function MemoIndex({ memos, selectMemo, handleAddButtonClick }) {
  return (
    <section>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <Memo memo={memo} selectMemo={selectMemo} />
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            handleAddButtonClick();
          }}
        >
          +
        </button>
      </div>
    </section>
  );
}
