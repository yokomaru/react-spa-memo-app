export default function MemoTextArea({ editingMemo, setEditingMemo }) {
  return (
    <div>
      <textarea
        className="memo-textarea"
        value={editingMemo.content}
        onChange={(e) =>
          setEditingMemo({ id: editingMemo.id, content: e.target.value })
        }
      />
    </div>
  );
}
