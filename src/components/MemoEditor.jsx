import { useLogin } from '../hooks/LoginHook.jsx';
import MemoTextArea from './MemoTextArea.jsx';

export default function MemoEditor({
  editingMemo,
  setEditingMemo,
  handleUpdateButtonClick,
  handleDeleteButtonClick,
}) {
  const { login } = useLogin();
  return (
    <>
      <MemoTextArea editingMemo={editingMemo} setEditingMemo={setEditingMemo} />
      {login && (
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
      )}
    </>
  );
}
