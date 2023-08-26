import { useState } from "react";
export default function PackingList({ items, onClearItems, onDeleteItem, onCheckboxChange }) {
  const [sortOption, setSortOption] = useState('input');
  const [showPackedOnly, setShowPackedOnly] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const sortedItems = [...items];

  if (showPackedOnly) {
    sortedItems.filter(item => item.packed);
  }
  if (sortOption === 'input') {
    sortedItems.sort((a, b) => a.text.localeCompare(b.text));
  } else if (sortOption === 'number') {
    sortedItems.sort((a, b) => a.number - b.number);
  }


  const handleCheckboxChange = (index, isChecked) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [index]: isChecked
    }));
    onCheckboxChange(index, isChecked); // Call the parent handler to update selectedCount
  };
  return (
    <div className="list">
    <ul>
      {sortedItems.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={checkedItems[index] || false}
            onChange={() => {
              handleCheckboxChange(index, !checkedItems[index]);
            }}
          />
          {item.number} {item.text}
          {/* <span> {item.packed ? 'Yes' : 'No'}</span> */}

          <button onClick={() => onDeleteItem(index)}>X</button>
        </li>
      ))}
    </ul>
    <div className="actions">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortOption} onChange={e => setSortOption(e.target.value)}>
        <option value="input">Input</option>
        <option value="number">Packed</option>
      </select>
      <button onClick={onClearItems}>Clear List</button>
    </div>
  </div>
  );
}
