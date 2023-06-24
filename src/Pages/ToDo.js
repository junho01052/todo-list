import Input from "Components/Input";
import ToDoItemList from "Components/ToDoItemList";
import { useState } from "react";
import styled from 'styled-components'
import Header from "UI/Header";


const ToDo = () => {

    const [reFetch, setReFetch] = useState(false)
    
    return (
        <>   
            <Header />        
            <Input reFetch={reFetch} setReFetch={setReFetch} /> 
            <ToDoItemList reFetch={reFetch} setReFetch={setReFetch} />
        </>
    );
}
 
export default ToDo;