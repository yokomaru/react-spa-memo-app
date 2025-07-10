import { useState, useEffect, useReducer, useRef } from 'react';
import './App.css';
import MemoIndex from './components/MemoIndex.jsx';
import MemoEditor from './components/MemoEditor.jsx';
import memosReducer from './reducers/memosReducer.js';
import {
  setItemsToLocalStorage,
  getItemsFromLocalStorage,
} from './utils/LocalStorage.js';

export default function App() {
  let maxId = useRef(0);

  const [memos, dispatch] = useReducer(
    memosReducer,
    getItemsFromLocalStorage('memos') || [],
  );
  const [editingMemoID, setEditingMemoID] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    maxId.current = Math.max(-1, ...memos.map((m) => m.id)) + 1;
  }, [memos]);

  function handleMemoClick(e, memo) {
    e.preventDefault();
    setEditingMemoID(memo.id);
    setText(memo.content);
  }

  function handleAddButtonClick(e) {
    e.preventDefault();
    const nextMemo = {
      id: maxId.current,
      content: '新規メモ',
    };
    dispatch({
      type: 'added',
      ...nextMemo,
    });
    setItemsToLocalStorage('memos', memos);
    setEditingMemoID(nextMemo.id);
    setText(nextMemo.content);
  }

  function handleUpdateButtonClick(editingMemoID, text) {
    const trimmed = text.trim();
    if (trimmed === '') {
      alert('空白では入力できません');
      return;
    }
    const updatedMemo = {
      id: editingMemoID,
      content: trimmed,
    };
    dispatch({
      type: 'updated',
      memo: updatedMemo,
    });
    setItemsToLocalStorage('memos', memos);
  }

  function handleDeleteButtonClick(editingMemoID) {
    dispatch({
      type: 'deleted',
      id: editingMemoID,
    });
    setEditingMemoID();
  }

  if (editingMemoID === null) {
    return (
      <>
        <div className="main">
          <div className="memo-index full">
            <MemoIndex
              memos={memos}
              editingMemoID={editingMemoID}
              handleMemoClick={handleMemoClick}
              handleAddButtonClick={handleAddButtonClick}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main">
          <div className="memo-index half">
            <MemoIndex
              memos={memos}
              editingMemoID={editingMemoID}
              handleMemoClick={handleMemoClick}
              handleAddButtonClick={handleAddButtonClick}
            />
          </div>
          <div className="memo-editor">
            <MemoEditor
              editingMemoID={editingMemoID}
              text={text}
              setText={setText}
              memos={memos}
              handleUpdateButtonClick={handleUpdateButtonClick}
              handleDeleteButtonClick={handleDeleteButtonClick}
            />
          </div>
        </div>
      </>
    );
  }
}
