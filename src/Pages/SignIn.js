import { styled } from "styled-components";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
    <SignInStyle>
      <input
        type="email"        
      />
      <input
        type="password"
      />
      <button>
        로그인
      </button>

      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </SignInStyle>
    )
}
 
export default SignIn;

const SignInStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;

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
    width: 268px;
    height: 48px;
    padding: 10.4px;
    margin: 16px 2px 0 2px;
    background-color: black;
    color: #ffffff;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;
