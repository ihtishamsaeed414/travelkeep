import React, {useState} from "react";
export default function PackingList({ items, deleteItem, togglePacked, clearAllItems  }) {
  const [sortBy, setSortBy] = useState("input"); // Track the current sort type
 
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
          <input
          type="checkbox"
          checked={item.packed}
          onChange={() => togglePacked(item.id)}
        />
            {item.quantity}{item.description}
            <button onClick={() => deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">Original Order</option>
          <option value="packed">Sort by Packed</option>
          <option value="description">Sort by Description</option>
          <option value="input">Sort by input</option>
        </select>
        <button onClick={clearAllItems}>Clear All</button>
      </div>
    </div>
    
  );
}
