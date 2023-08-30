import Form from "./Forms";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
function App() {

  const [items, setItems] = useState([]);
  const addItem = (newItem) => {
    // Generate a unique ID using the current timestamp
    const newItemWithId = { ...newItem, id: Date.now(), packed: false };
    setItems([...items, newItemWithId]);
  };
  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    console.log(updatedItems);
  };
  const togglePacked = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  };
  const clearAllItems = () => {
    setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem}/>
      <PackingList items={items} deleteItem={deleteItem} togglePacked={togglePacked} clearAllItems ={clearAllItems }/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
