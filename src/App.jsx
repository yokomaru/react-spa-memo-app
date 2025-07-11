import { useState, useEffect, useReducer } from 'react';
import './App.css';
import MemoIndex from './components/MemoIndex.jsx';
import MemoEditor from './components/MemoEditor.jsx';
import memosReducer from './reducers/memosReducer.js';
import {
  setItemsToLocalStorage,
  getItemsFromLocalStorage,
} from './utils/LocalStorage.js';

export default function App() {
  const [memos, dispatch] = useReducer(
    memosReducer,
    getItemsFromLocalStorage('memos'),
  );
  const [editingMemo, setEditingMemo] = useState();

  useEffect(() => {
    setItemsToLocalStorage('memos', memos);
  }, [memos]);

  function handleMemoClick(e, memo) {
    e.preventDefault();
    setEditingMemo(memo);
  }

  function handleAddButtonClick(e) {
    const maxId = Math.max(-1, ...memos.map((m) => m.id)) + 1;
    e.preventDefault();
    const nextMemo = {
      id: maxId,
      content: '新規メモ',
    };
    dispatch({
      type: 'added',
      ...nextMemo,
    });
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
      content: content,
    };
    dispatch({
      type: 'updated',
      memo: updatedMemo,
    });
    setEditingMemo(updatedMemo);
  }

  function handleDeleteButtonClick(memo) {
    dispatch({
      type: 'deleted',
      id: memo.id,
    });
    setEditingMemo();
  }

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
