import { useEffect, useReducer } from 'react';
import memosReducer from '../reducers/memosReducer.js';
import {
  setItemsToLocalStorage,
  getItemsFromLocalStorage,
} from '../utils/localStorage.js';

export default function useMemos() {
  const [memos, dispatch] = useReducer(
    memosReducer,
    getItemsFromLocalStorage('memos'),
  );

  useEffect(() => {
    setItemsToLocalStorage('memos', memos);
  }, [memos]);

  function addMemo(memo) {
    dispatch({
      type: 'added',
      memo,
    });
  }

  function updateMemo(memo) {
    dispatch({
      type: 'updated',
      memo,
    });
  }

  function deleteMemo(memo) {
    dispatch({
      type: 'deleted',
      id: memo.id,
    });
  }

  return {
    memos,
    addMemo,
    updateMemo,
    deleteMemo,
  };
}
