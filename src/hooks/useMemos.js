import { useState, useEffect, useReducer } from 'react';
import memosReducer from '../reducers/memosReducer.js';
import {
  setItemsToLocalStorage,
  getItemsFromLocalStorage,
} from '../utils/localStorage.js';

export default function useMemos() {
  const [editingMemo, setEditingMemo] = useState();
  const [memos, dispatch] = useReducer(
    memosReducer,
    getItemsFromLocalStorage('memos'),
  );

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
      content,
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

  return {
    memos,
    editingMemo,
    setEditingMemo,
    handleMemoClick,
    handleAddButtonClick,
    handleUpdateButtonClick,
    handleDeleteButtonClick,
  };
}
