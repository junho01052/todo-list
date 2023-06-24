import { styled } from "styled-components";
import Header from "UI/Header";

const SignUp = () => {
    return  (
        <>
            <Header />
            <SignUpStyle>
            <input
                type="email"
                placeholder="사용할 이메일을 입력해주세요"
                />
            <input
                type="password"
                placeholder="사용할 비밀번호를 입력해주세요"
                />
            <button>
                회원가입
            </button>
            </SignUpStyle>
        </>
    )
}
 
export default SignUp;

const SignUpStyle = styled.div`
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
    margin: 16px 2px 22px 2px;
    border-radius: 10px;
    border: none;
    font-size: 18px;        
  }
`