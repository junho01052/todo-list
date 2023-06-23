import axios from "axios";
import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { styled } from "styled-components";

const ToDoItemList = ( {reFetch, setReFetch}) => {

    const [toDoList, setToDoList] = useState([])

    useEffect(() => {
        const getToDo = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/todos",
                    {headers : {
                        "Content-Type" : "application/json" } }
                );
                setToDoList([...response.data])
            } catch (error) {
                alert(error);
            }
        }
        getToDo()
    },[reFetch])

    

    return(        
        <ListStyle>            
            <div>Working</div>
                {toDoList && toDoList.filter(todo => !todo.isDone).map(todo => (
                    <ToDoItem 
                    key={todo.id}
                    todo={todo}
                    reFetch={reFetch}
                    setReFetch={setReFetch}
                    />
                    ))}
            <div>Done</div>
                {toDoList && toDoList.filter(todo => todo.isDone).map(todo => (
                    <ToDoItem 
                    key={todo.id}
                    todo={todo}
                    reFetch={reFetch}
                    setReFetch={setReFetch}
                    />
                    ))}
        </ListStyle>       
    )
}
 
export default ToDoItemList;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`