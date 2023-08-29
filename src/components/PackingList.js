import React, { useState, useEffect } from "react";

export default function PackingList({ items, onClearItems, onDeleteItem, onCheckboxChange }) {
  const [sortOption, setSortOption] = useState("input");
  const [checkedItems, setCheckedItems] = useState({});

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
  };

  const sortItems = (itemsToSort, sortOption) => {
    if (sortOption === "input") {
      return [...itemsToSort].sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortOption === "number") {
      return [...itemsToSort].sort((a, b) => a.number - b.number);
    }
    return itemsToSort;
  };

  const sortedItems = sortItems(items, sortOption);

  const handleCheckboxChange = (index, isChecked) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [index]: isChecked,
    }));
    onCheckboxChange(index, isChecked);
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
            <button onClick={() => onDeleteItem(index)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <label htmlFor="sort">Sort by:</label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="input">Sort by text</option>
          <option value="number">Sort by number</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
