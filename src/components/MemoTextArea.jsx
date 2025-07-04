export default function MemoTextArea({ text, setText }) {
  return (
    <div>
      <textarea
        className="memo-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
