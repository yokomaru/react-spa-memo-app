import MemoTextArea from './MemoTextArea.jsx';

export default function MemoEditor({
  id,
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
            handleUpdateButtonClick(id, text);
          }}
        >
          更新
        </button>
        <button
          onClick={() => {
            handleDeleteButtonClick(id);
          }}
        >
          削除
        </button>
      </div>
    </>
  );
}
