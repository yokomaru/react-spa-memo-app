export default function memosReducer(memos, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...memos,
        { id: action.id, title: action.title, content: action.content }
      ];
    }
    case 'changed': {
      return memos.map((m) => {
        if (m.id === action.memo.id) {
          return action.memo;
        } else {
          return m;
        }
      });
    }
    case 'deleted': {
      return memos.filter((m) => m.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}