interface Props {}

export function EditorToolbar({}: Props) {
  return (
    <div id="toolbar">
      <select className="ql-size">
        <option value="small" />
        <option selected />
        <option value="large" />
        <option value="huge" />
      </select>
      <button className="ql-bold" />
    </div>
  );
}
