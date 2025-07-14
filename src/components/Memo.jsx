export default function Memo({ memo, editingMemo, handleMemoClick }) {
  return (
    <a
      className={memo.id === editingMemo?.id ? 'selected-memo' : undefined}
      href="#"
      onClick={(e) => {
        handleMemoClick(e, memo);
      }}
    >
      <span>{memo.content.split('\n')[0]}</span>
    </a>
  );
}
