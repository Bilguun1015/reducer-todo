import React, {useState} from "react";

const AddTodo = ({add}) => {
  const [item, setItem] = useState("");
  return (
    <div className="AddTodo">
      <input value={item} onChange={e => setItem(e.target.value)} className="AddTodoInput" type="text"/>
      <button className="AddTodoButton" onClick={() => {add(item); setItem("")}}>Add</button>
    </div>
  );
}

export default AddTodo;