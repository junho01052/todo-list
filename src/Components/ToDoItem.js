import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";

const ToDoItem = ( {todo, reFetch, setReFetch} ) => {    
  
    
    const handleCompleteButton = (id) => {
        axios({
            url: `http://localhost:8000/todos/${id}`,
            method: "PUT",            
            data:{
              "isDone": !todo.isDone,
              "title": todo.title,
              "content": todo.content,
            },
          })
          .then((res) => {
              console.log(res)
              if (res.status === 200) {
                  setReFetch(!reFetch)
              }
          })            
            .catch((err) => alert(err));
        };
    

    const deleteToDo = async (id) => {
        try {
          await axios.delete(
            `http://localhost:8000/todos/${id}`,            
          );
          setReFetch(!reFetch);
        } catch (error) {
          alert(error);
        }
      };

    return (          
        <ToDoItemStyle>
            <span>{todo.title}</span>                
            <span>{todo.content}</span>
            <div>
                <button onClick={() => deleteToDo(todo.id)}>삭제하기</button>
                {!todo.isDone ? <button onClick={()=>handleCompleteButton(todo.id)}>완료</button> : <button onClick={()=>handleCompleteButton(todo.id)}>취소</button>}
                    
             </div>
        </ToDoItemStyle>        
    )
}
 
export default ToDoItem;

const ToDoItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;

  
`;