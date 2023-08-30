import React, { useState } from 'react';
export default function Form({ addItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { description, quantity, packed: false };
    addItem(newItem);
    setDescription('');
    setQuantity(1);
  };

  return (
    <form className="add-form"  onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    

      <button>ADD</button>
    </form>
  );
}
