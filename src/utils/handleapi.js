import axios from 'axios'

const baseurl="http://localhost:5000/api"

const getAllTodo=(setTodo)=>{
    axios
    .get(baseurl)
    .then(({data})=>{
        console.log(`data...`,data);
        setTodo(data)
    })
}

const addTodo=(text, setText, setTodo)=>{

    axios
    .post(`${baseurl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log(err))
}

const updateToDo=(toDoId, text, setTodo, setText,setisUpdating)=>{

    axios
    .post(`${baseurl}/update`,{_id:toDoId,text})
    .then((data)=>{
        setText("")
        setisUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log(err))
}

const deleteToDo=(_id,setTodo)=>{

    axios
    .post(`${baseurl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log(err))
}

export {getAllTodo,addTodo,updateToDo,deleteToDo}