import React, {useState} from "react";
export default function PackingList({ items, deleteItem, togglePacked, clearAllItems  }) {
  const [sortType, setSortType] = useState('none'); // Track the current sort type
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };
  const sortedItems = [...items]; // Clone the items array for sorting
  if (sortType === 'packed') {
    sortedItems.sort((a, b) => a.packed - b.packed);
  } else if (sortType === 'description') {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortType === 'quantity') {
    sortedItems.sort((a, b) => a.quantity - b.quantity);
  }

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
        <select value={sortType} onChange={handleSortChange}>
          <option value="none">Original Order</option>
          <option value="packed">Sort by Packed</option>
          <option value="description">Sort by Description</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        <button onClick={clearAllItems}>Clear All</button>
      </div>
    </div>
    
  );
}
