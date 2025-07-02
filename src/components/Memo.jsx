export default function Memo({ memo, selectMemo }) {
  return (
    <button
      onClick={() => {
        selectMemo(memo);
      }}
    >
      {memo.title}
    </button>
  );
}