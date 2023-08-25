export default function PackingList() {
  return (
    <div className="list">
      <div className="actions">
        <select>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
}
