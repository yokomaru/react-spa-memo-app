import { useState, useEffect, useReducer } from "react";
import "./App.css";
import MemoIndex from './components/MemoIndex.jsx';
import MemoEditor from './components/MemoEditor.jsx';
import memosReducer from './reducers/memosReducer.js';
import {setItemsFromLocalStorage, getItemsToLocalStorage} from './utils/LocalStorage.js';

let maxId = 0;

export default function MemoApps() {
  const [memos, dispatch] = useReducer(memosReducer, setItemsFromLocalStorage('memos') || []);
  const [editingMemoID, setEditingMemoID] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    getItemsToLocalStorage('memos', memos);
    maxId = Math.max(0, ...memos.map(m => m.id));
  }, [memos]);

  function selectMemo(memo) {
    setEditingMemoID(memo.id);
    setText(memo.content);
  }

  function handleAddButtonClick() {
    const nextMemo = { id: ++maxId, title: "新規メモ", content: "" };
    dispatch({
      type: 'added',
      ...nextMemo
    });
    setText(nextMemo.content);
  }

  function handleUpdateButtonClick(editingMemoID, text) {
    const updatedMemo = { id: editingMemoID, title: text.split("\n")[0], content: text };
    dispatch({
      type: 'changed',
      memo: updatedMemo,
    });
  }

  function handleDeleteButtonClick(editingMemoID) {
      dispatch({
        type: 'deleted',
        id: editingMemoID,
      });
    setEditingMemoID();
  }

  if (editingMemoID == null) {
    return (
      <section>
        <MemoIndex
          memos={memos}
          selectMemo={selectMemo}
          handleAddButtonClick={handleAddButtonClick}
        />
      </section>
    )
  }else{
    return (
      <>
      <section>
        <MemoIndex
          memos={memos}
          selectMemo={selectMemo}
          handleAddButtonClick={handleAddButtonClick}
        />
      </section>
      <section>
        <MemoEditor
          editingMemoID={editingMemoID}
          text={text}
          setText={setText}
          memos={memos}
          handleUpdateButtonClick={handleUpdateButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </section>
      </>
    )
  }
}
