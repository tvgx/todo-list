import React from "react";

function Create() {
    const [task, setTask] = useState("");
    const handleAdd = ()=> {    
        axios.post('http://localhost:3001/add',{task:task})
        .then(res=> {
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    return (
        <div classname ='create_form'>
            <input type ="text" name ="" id="" placeholder ="enter task" onChange = {()=> setTask(e.target.value)}/>
            <button type='button' onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create;