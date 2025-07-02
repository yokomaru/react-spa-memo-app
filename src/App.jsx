import { useState } from "react";
import "./App.css";

function Memo({ memo, handleMemoClick }) {
  return (
    <button
      onClick={() => {
        handleMemoClick(memo);
      }}
    >
      {memo.title}
    </button>
  );
}

function MemoIndex({ memos, handleMemoClick, handleAddButtonClick }) {
  return (
    <section>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <Memo memo={memo} handleMemoClick={handleMemoClick} />
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            handleAddButtonClick(memos);
          }}
        >
          +
        </button>
      </div>
    </section>
  );
}

function MemoTextArea({
  text,
  setText,
}) {
  return (
    <div>
      <textarea
        name="memoContent"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={40}
      />
    </div>
  );
}

function MemoEditor({
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

let nextId = 3;

const MEMOS = [
  {
    id: 0,
    title: "メモ1",
    content: "メモ1\nメモ1の内容\nメモ1の内容\nメモ1の内容",
  },
  {
    id: 1,
    title: "メモ2",
    content: "メモ2\nメモ2の内容\nメモ2の内容\nメモ2の内容",
  },
  {
    id: 2,
    title: "メモ3",
    content: "メモ3\nメモ3の内容\nメモ3の内容\nメモ3の内容",
  },
];

export default function MemoApps() {
  const [memos, setMemos] = useState(MEMOS);
  const [editingMemoID, setEditingMemoID] = useState(MEMOS[0].id);
  const [text, setText] = useState(MEMOS[0].content);


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
