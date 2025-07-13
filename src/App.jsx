import './App.css';
import MemoIndex from './components/MemoIndex.jsx';
import MemoEditor from './components/MemoEditor.jsx';
import MemoLogin from './components/MemoLogin.jsx';
import useMemos from './hooks/useMemos.js';
import { useState } from 'react';

import { LoginProvider } from './hooks/LoginHook.jsx';
function AppContent() {
  const [editingMemo, setEditingMemo] = useState();
  const { memos, addMemo, updateMemo, deleteMemo } = useMemos();

  function handleMemoClick(e, memo) {
    e.preventDefault();
    setEditingMemo(memo);
  }

  function handleAddButtonClick(e) {
    e.preventDefault();
    const maxId = Math.max(-1, ...memos.map((m) => m.id)) + 1;
    const nextMemo = {
      id: maxId,
      content: '新規メモ',
    };
    addMemo(nextMemo);
    setEditingMemo(nextMemo);
  }

  function handleUpdateButtonClick(memo) {
    const content = memo.content.trim();
    if (content === '') {
      alert('空白では入力できません');
      return;
    }
    const updatedMemo = {
      id: memo.id,
      content,
    };
    updateMemo(updatedMemo);
    setEditingMemo(updatedMemo);
  }

  function handleDeleteButtonClick(memo) {
    deleteMemo(memo);
    setEditingMemo();
  }

  return (
    <>
      <div className="header">
        <MemoLogin />
      </div>
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

export default function App() {
  return (
    <LoginProvider>
      <AppContent />
    </LoginProvider>
  );
}
