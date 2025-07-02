export default function MemoTextArea({
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