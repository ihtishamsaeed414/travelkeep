import { useEffect, useState } from "react";
import Form from "./Forms";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
function App() {
  const storedItems = JSON.parse(localStorage.getItem('packingItems')) || [];
  const [packingItems, setPackingItems] = useState(storedItems);

  const handleAddItem = newItem => {
    const updatedItems = [...packingItems, newItem];
    setPackingItems(updatedItems);
    localStorage.setItem('packingItems', JSON.stringify(updatedItems));
  };

  const handleDeleteItem = index => {
    const updatedItems = packingItems.filter((item, i) => i !== index);
    setPackingItems(updatedItems);
    localStorage.setItem('packingItems', JSON.stringify(updatedItems));
  };

  const handleClearItems = () => {
    setPackingItems([]);
    localStorage.removeItem('packingItems');
    alert('Are you Sure you want to delete all items?');
  };
  const handleCheckboxChange = (index, isChecked) => {
    const updatedItems = [...packingItems];
    updatedItems[index].packed = isChecked;
    setPackingItems(updatedItems);
  };

  const [selectedCount, setSelectedCount] = useState(0);
  useEffect(() => {
    const newSelectedCount = packingItems.filter(item => item.packed).length;
    setSelectedCount(newSelectedCount);
  }, [packingItems]);
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
