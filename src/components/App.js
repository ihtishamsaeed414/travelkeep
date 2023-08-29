import React, { useState, useEffect } from "react";
import Form from "./Forms";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [packingItems, setPackingItems] = useState([]);

  const handleAddItem = newItem => {
    setPackingItems(prevItems => [...prevItems, newItem]);
  };

  const handleDeleteItem = index => {
    setPackingItems(prevItems => prevItems.filter((item, i) => i !== index));
  };

  const handleClearItems = () => {
    setPackingItems([]);
    alert('Are you sure you want to delete all items?');
  };

  const handleCheckboxChange = (index, isChecked) => {
    setPackingItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].packed = isChecked;
      return updatedItems;
    });
  };

  const selectedCount = packingItems.filter(item => item.packed).length;

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={packingItems} onDeleteItem={handleDeleteItem} onClearItems={handleClearItems} onCheckboxChange={handleCheckboxChange} />
      <Stats totalEntered={packingItems.length} selectedCount={selectedCount} />
    </div>
  );
}

export default App;
