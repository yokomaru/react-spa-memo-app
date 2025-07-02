import MemoTextArea from './MemoTextArea.jsx';

export default function MemoEditor({
  editingMemoID,
  text,
  setText,
  memos,
  handleUpdateButtonClick,
  handleDeleteButtonClick,
}) {
  return (
    <section>
      <MemoTextArea
        text={text}
        setText={setText}
      />
      <div>
        <button
          onClick={() => {
            handleUpdateButtonClick(editingMemoID, text);
          }}
        >
          更新
        </button>
        <button
          onClick={() => {
            handleDeleteButtonClick(memos, editingMemoID);
          }}
        >
          削除
        </button>
      </div>
    </section>
  );
}
