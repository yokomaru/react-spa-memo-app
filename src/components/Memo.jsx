export default function Memo({ memo, handleMemoClick }) {
  return (
    <button
      onClick={() => {
        handleMemoClick(memo);
      }}
    >
      {memo.title}
    </button>
  );
}