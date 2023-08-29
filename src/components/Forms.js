import { useState } from "react";
export default function Form({onAddItem}) {
  const [textInput, setTextInput] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [sortOption, setSortOption] = useState('input');
  // const [displayedText, setDisplayedText] = useState('');



  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleSelectChange = event => {
    setSelectedNumber(event.target.value);
  };
  const handleAddClick = (event) => {
    event.preventDefault();
    if (textInput.trim() !== '') { 
      onAddItem({ text: textInput, number: selectedNumber });
      setTextInput('');
      setSelectedNumber('');
    }
  };

  return (
    <form className="add-form">
      <h3>what do you need for your trip?</h3>
      {/* For selection of id */}
      <select value={selectedNumber} onChange={handleSelectChange}>
        {Array.from({ length: 20 }, (_, index) => (
          <option key={index} value={index + 1 }>
            {index + 1}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={textInput}
        onChange={handleInputChange}
      />

      <button onClick={handleAddClick}>ADD</button>

    </form>

  );
}
