import { useState } from "react";

// Deconstructing the created array and set the
// state to be a string with ("")

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("")
  
// the preventDefault will prevent a page refresh when data is submitted
// If the user attempts to enter an empty task
// an alert will be shown "Please add a task"
// setValue("") resets the input field to a blank
// string after user submits a task

  const handleSubmit = e => {
    e.preventDefault();
    if(value === ""){
    return alert("Please add a task")
    }
    createTodoItem(value)
    setValue("")    
    };

    return (
      <form onSubmit={handleSubmit}>   

      <input 
      type="text"
      placeholder="Please enter a festive task"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />

      <button className="addTaskBtn" onClick={handleSubmit}>Add Task!</button>
    
      </form>
    );
  };

  export default TodoInput