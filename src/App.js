import React, { useState } from "react";
import "./App.css";
import deleteLogo from "./del.png";
export default function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter a item");
      return;
    }
    const item = {
      id: Math.random(),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }
  return (
    <>
      <div className="ALL">
        <div className="App">
          <div>
            <h1>To-Do-List</h1>
          </div>
          <div className="tasks">
            <input
              id="list"
              placeholder="Enter the task"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem} id="addbutton">
              ADD
            </button>

            <ol>
              {items.map((item) => {
                return (
                  <div className="itemsList">
                    <li key={item.id}>
                      {item.value}
                     

                      <button id="deletebutton" onClick={() => deleteItem(item.id)}>
                        <img src={deleteLogo} alt="delete" id="delButton"></img>
                      </button>

                    
                    </li>
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
