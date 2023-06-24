import Header from "UI/Header";
import SignIn from "./SignIn";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <SignIn />
            <Link to="/todo">
                <H2Style>
                    비회원으로 ToDoList 만들러 가기
                </H2Style>
            </Link>
        </>
    )
}
 
export default Home;

const H2Style = styled.h2 `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;  
`