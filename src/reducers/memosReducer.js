export default function memosReducer(memos, action) {
  switch (action.type) {
    case 'added': {
      return [...memos, action.memo];
    }
    case 'updated': {
      return memos.map((m) => {
        if (m.id === action.memo.id) {
          return action.memo;
        } else {
          return m;
        }
      });
    }
    case 'deleted': {
      return memos.filter((m) => m.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
