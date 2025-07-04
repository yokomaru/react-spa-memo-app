export default function Memo({ memo, editingMemoID, handleMemoClick }) {
  return (
    <a
      className={memo.id === editingMemoID ? 'selected-memo' : undefined}
      href="#"
      onClick={(e) => {
        handleMemoClick(e, memo);
      }}
    >
      <span>{memo.title}</span>
    </a>
  );
}
