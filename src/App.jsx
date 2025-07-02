import { useState } from "react";
import "./App.css";
import MemoIndex from './components/MemoIndex.jsx';
import MemoEditor from './components/MemoEditor.jsx';

let nextId = 0;

export default function MemoApps() {
  const [memos, setMemos] = useState([]);
  const [editingMemoID, setEditingMemoID] = useState();
  const [text, setText] = useState();

  function handleMemoClick(memo) {
    setEditingMemoID(memo.id);
    setText(memo.content);
  }

  function handleAddButtonClick(memos) {
    const nextMemo = { id: nextId++, title: "新規メモ", content: "" };
    setMemos([...memos, nextMemo]);
    handleMemoClick(nextMemo);
  }

  function handleUpdateButtonClick(editingMemoID, text) {
    const updatedMemo = { id: editingMemoID, title: text.split("\n")[0], content: text };
    setMemos(
      memos.map((m) => {
        if (m.id === editingMemoID) {
          return updatedMemo;
        } else {
          return m;
        }
      }),
    );
    handleMemoClick(updatedMemo);
  }

  function handleDeleteButtonClick(memos, editingMemoID) {
    setMemos(memos.filter((m) => m.id !== editingMemoID));
  }

  return (
    <section>
      <MemoIndex
        memos={memos}
        handleMemoClick={handleMemoClick}
        handleAddButtonClick={handleAddButtonClick}
      />
      <MemoEditor
        editingMemoID={editingMemoID}
        text={text}
        setText={setText}
        memos={memos}
        handleUpdateButtonClick={handleUpdateButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
    </section>
  );
}
