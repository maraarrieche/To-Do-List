import React, {useState} from 'react'


const ToDoList = () => {

    const [inputValue,setInputValue] = useState("");

    const [taskList,setTaskList] = useState([
        {
            description: "Cepillarme los dientes",
            status: true
        },
        {
            description: "Estudiar",
            status: true
        },
        {
            description: "Comer",
            status: true
        },
        {
            description: "Leer noticias",
            status: true
        },
    ]);

    const HandleNewTask = (event) => {
        setInputValue(event.target.value)
        if(event.key == "Enter"){
            console.log(event.key)
            setTaskList([...taskList,{description: inputValue, status:false}])

            setInputValue("")
        }
    }

    const eliminarTask = (taskIndex) => {
        console.log(taskIndex)
        setTaskList(taskList.filter((task,index) => index != taskIndex))
    }

    return(
        <>
        <h1 className="titulo">To Do List</h1>
    <div className="input-group mb-3 justify-content-center">
        <input type="text" onKeyUp={HandleNewTask} />
    </div>
        <ul className="list-group" id="lista">
            {taskList.map((element, index) => {
                return(
                    <li key={index} className="list-group-item pt-3" id="item">{element.description}{""}
                    {""}
                    <button type="submit" onClick={() => eliminarTask(index)} className="btn btn-light float-end" id="eliminar">x</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default ToDoList