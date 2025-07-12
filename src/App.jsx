import './App.css';
import MemoIndex from './components/MemoIndex.jsx';
import MemoEditor from './components/MemoEditor.jsx';
import useMemos from './hooks/useMemos.js';

export default function App() {
  const {
    memos,
    editingMemo,
    setEditingMemo,
    handleMemoClick,
    handleAddButtonClick,
    handleUpdateButtonClick,
    handleDeleteButtonClick,
  } = useMemos();

  return (
    <>
      <div className="main">
        <div className={'memo-index ' + (editingMemo ? 'half' : 'full')}>
          <MemoIndex
            memos={memos}
            editingMemo={editingMemo}
            handleMemoClick={handleMemoClick}
            handleAddButtonClick={handleAddButtonClick}
          />
        </div>
        {editingMemo && (
          <div className="memo-editor">
            <MemoEditor
              editingMemo={editingMemo}
              setEditingMemo={setEditingMemo}
              handleUpdateButtonClick={handleUpdateButtonClick}
              handleDeleteButtonClick={handleDeleteButtonClick}
            />
          </div>
        )}
      </div>
    </>
  );
}
