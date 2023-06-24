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
                    `${process.env.REACT_APP_TODOS}/todos`,
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
            <ContainerStyle>
                <h2>Working</h2>
                <ToDoListBoxStyle>                    
                    {toDoList && toDoList.filter(todo => !todo.isDone).map(todo => (
                        <ToDoItem 
                        key={todo.id}
                        todo={todo}
                        reFetch={reFetch}
                        setReFetch={setReFetch}
                        />
                        ))}
                </ToDoListBoxStyle>
                <h2>Done</h2>
                <ToDoListBoxStyle>   
                    {toDoList && toDoList.filter(todo => todo.isDone).map(todo => (
                        <ToDoItem 
                        key={todo.id}
                        todo={todo}
                        reFetch={reFetch}
                        setReFetch={setReFetch}
                        />
                        ))}
                </ToDoListBoxStyle>   
            </ContainerStyle>            
        </ListStyle>       
    )
}
 
export default ToDoItemList;

const ListStyle = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  margin-top: 5vh;  
`

const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;  
    
`

const ToDoListBoxStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
`