import { useState } from "react";
import './App.css';
import TodoInput from "./componenents/TodoInput"
import TodoItem from "./componenents/TodoItem"
import Header from "./componenents/Header"
import Footer from "./componenents/Footer"

//Let it snow!
// import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

//Setting the useState hook to take the data to be displayed in the list .
//Using an array with 2 key value pairs.
// One to show the todo and another to track completed ones

const App = () => {

  const [todoItems, setTodoItems] = useState(
    [
      {todo: "Start a list", done: true},
      {todo: "Check it twice", done: false},
      {todo: "Find out who's naughty or nice", done: false}
    ])
    
//Function to copy the array with the spread operator
//Takes todo as parameter and is inserted into array with same key value pairs (todo and done).
//Function is then passed down to TodoInput component.
  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, done: false }];
    setTodoItems(newTodoItems);
    };

//Delete todo function which takes the index as a parameter.
//Makes a copy of current array using spread operator
//then uses splice method to remove 1 entry at the index of the item
//Function is passed to TodoItem component.
  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
  }

//Function to mark items as completed.
//Makes a copy of current array using spread operator
//Ternary operator is used if the value is true or false
//Syntax is 'Condition ? if True do this : if false do this'
//This sets it to true if false and vice versa
  const isDone = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].done === false ? (newTodoItems[index].done = true) : (newTodoItems[index].done = false);
    setTodoItems(newTodoItems)
    };
  
//TodoItem creates an array with todoItems.map (state cannot be altered directly)
//Each element is called 'item' representing each object along with its index within the array to be selected
//This is passed down to TodoItem component also
  return (
    <div className="app">
      <Header/>
      
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, index) => (
      
      <TodoItem 
      key={index} 
      index={index}
      item={item}
      deleteTodoItem={deleteTodoItem}
      isDone={isDone} />
      
))}
      <footer><Footer/></footer>

      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  )
}

export default App;