import { useEffect, useState } from "react";
import ToDo from "./components/ToDo"
import { addTodo, deleteToDo, getAllTodo, updateToDo } from "./utils/handleapi";

function App() {

  const [toDo,setTodo]=useState([])
  // setting the text wrtie in text field
  const [text,setText]=useState("")
  // it will show either we have to add or update this will shown in button form
  const [isUpdating,setisUpdating]=useState(false)
  // id for seting the id state
  const [toDoId,setTodoId]=useState("")


  useEffect(()=>{
    getAllTodo(setTodo)
  },[])


  const updateMode=(_id,text)=>{
    setisUpdating(true)
    setText(text)
    setTodoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add Todo...." 
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />

          <div className="add" 
          onClick={isUpdating ? 
            ()=> updateToDo(toDoId,text,setTodo,setText,setisUpdating)
            : 
            ()=>addTodo(text,setText,setTodo)}>
          {isUpdating ? "Update":"Add"}</div>
        </div>

        <div className="list">

          {toDo.map((item)=><ToDo 
          key={item._id} 
          text={item.text}
          updateMode={()=>updateMode(item._id,item.text)}
          deleteTodo={()=>deleteToDo(item._id,setTodo)}
          />)
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
