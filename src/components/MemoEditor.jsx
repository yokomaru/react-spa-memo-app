import MemoTextArea from './MemoTextArea.jsx';

export default function MemoEditor({
  editingMemoID,
  text,
  setText,
  handleUpdateButtonClick,
  handleDeleteButtonClick,
}) {
  return (
    <>
      <MemoTextArea text={text} setText={setText} />
      <div className="memo-buttons">
        <button
          onClick={() => {
            handleUpdateButtonClick(editingMemoID, text);
          }}
        >
          更新
        </button>
        <button
          onClick={() => {
            handleDeleteButtonClick(editingMemoID);
          }}
        >
          削除
        </button>
      </div>
    </>
  );
}
