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
            <TitleStyle>
                <span>{todo.title}</span>                
            </TitleStyle>
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
  justify-content: space-between;
  padding: 15px 10px 0px 10px;
  align-items: center;
  margin: 20px 10px 20px 10px;
  border-style: solid;
  border-radius: 10px;
  width: 300px;
  min-width: 300px;
  height: 250px;  

  button {
    width: 80px;
    height: 48px;
    padding: 10.4px;    
    margin: 10px 2px 22px 2px;
    border-radius: 10px;
    border: none;
    font-size: 15px;    
  }
`;

const TitleStyle = styled.div`
  font-size: 25px;
  font-weight: bold;  
`