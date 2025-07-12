import MemoTextArea from './MemoTextArea.jsx';

export default function MemoEditor({
  editingMemo,
  setEditingMemo,
  handleUpdateButtonClick,
  handleDeleteButtonClick,
}) {
  return (
    <>
      <MemoTextArea editingMemo={editingMemo} setEditingMemo={setEditingMemo} />
      <div className="memo-buttons">
        <button
          onClick={() => {
            handleUpdateButtonClick(editingMemo);
          }}
        >
          更新
        </button>
        <button
          onClick={() => {
            handleDeleteButtonClick(editingMemo);
          }}
        >
          削除
        </button>
      </div>
    </>
  );
}
