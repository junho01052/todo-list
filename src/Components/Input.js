import { useRef, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

const Input = ({reFetch, setReFetch}) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const inputRef = useRef(null)

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onClickAddButton = () => {
        axios({
            url: "http://localhost:8000/todos",
            method: "POST",
            data: {  
                "title" : title,
                "content" : content,
                "isDone": false
            },            
        })
        .then(res => {
            if(res) {
                setReFetch(!reFetch)
            }
        })
        .catch(err => alert(
       `이 axios 에러 메시지는 json-server를 열지 않으셔서 발생했습니다
        https://github.com/junho01052/todo-list 이 url로 돌아가
        READ.md파일 중 '실행방법3'을 다시한번 확인해주시길 바랍니다`))

        setTitle("")
        setContent("")
        inputRef.current.focus();
    }



    return (
        <>  
            <InputStyle>
                <input type="text" value={title} ref={inputRef} onChange={onChangeTitle} placeholder="제목을 입력해주세요"></input>
                <input type="text" value={content} onChange={onChangeContent} placeholder="내용을 입력해주세요"></input>            
                <button type="submit" onClick={onClickAddButton}>추가하기</button>            
            </InputStyle>
        </>
    )
}
 
export default Input;

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  width: 100%;

  input {
    font-size: 13px;
    text-decoration: none solid rgb(12, 13, 14);
    color: #0c0d0e;
    height: 28px;
    width: 268px;
    border: 1px solid #babfc4;
    margin: 5px 0 5px 0;
    cursor: text;
  }

  button {
    width: 276px;
    height: 48px;
    padding: 10.4px;    
    margin: 10px 2px 22px 2px;
    border-radius: 10px;
    border: none;
    font-size: 18px;    
  }

`