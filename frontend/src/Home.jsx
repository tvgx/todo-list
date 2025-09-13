import React, { useState } from "react";
import Create from "./Create";

function Home(){
    const [todos,setTodos] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3001/get')
        .then(res=>setTodos(res.data))
        .catch(err=>console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update'+id)
        .then(res=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete'+id)
        .then(res=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    return(
        <div classname = 'home'> 
        <h1>Todo List</h1>
            <Create />
            {
                todos.length ===0 ?
                <div><h2> No todos </h2></div>
                :
                todos.map(todo => {
                    <div classname ='task'>
                        <div classname ='checkbox' onClick ={()=>handleEdit(todo._id)}>
                            {todo.done?
                                <BsFillCheckCircleFill classname ='icon'></BsFillCheckCircleFill>
                                : <BsCircleFill classname ='icon'/>
                            }
                            <p classname = {todo.done? 'line_through':''}>{todo.task}</p>
                            <BsCircleFill classname ='icon'/>
                            {todo.task}
                        </div>
                        <div classname ='delete'>
                            <BsFillTrashFill classname ='icon' onClick ={handleDelete(todo._id)}/>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Home;