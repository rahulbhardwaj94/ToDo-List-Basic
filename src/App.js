import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  };

  const addInputList = () => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      addInputList();
    }
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={handleChange} 
          onKeyPress={handleKeyPress}
          type="text" 
          value={inputText} 
        />
        <button 
          onClick={addInputList}
          
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
