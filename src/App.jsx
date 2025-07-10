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
    getItemsFromLocalStorage('memos') || [],
  );
  const [editingMemoID, setEditingMemoID] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    setItemsToLocalStorage('memos', memos);
  }, [memos]);

  function handleMemoClick(e, memo) {
    e.preventDefault();
    setEditingMemoID(memo.id);
    setText(memo.content);
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
    setEditingMemoID(nextMemo.id);
    setText(nextMemo.content);
  }

  function handleUpdateButtonClick(id, text) {
    const content = text.trim();
    if (content === '') {
      alert('空白では入力できません');
      return;
    }
    const updatedMemo = {
      id: id,
      content: content,
    };
    dispatch({
      type: 'updated',
      memo: updatedMemo,
    });
    setEditingMemoID(id);
    setText(content);
  }

  function handleDeleteButtonClick(id) {
    dispatch({
      type: 'deleted',
      id: id,
    });
    setEditingMemoID();
    setText('');
  }

  if (editingMemoID === undefined) {
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
              id={editingMemoID}
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
