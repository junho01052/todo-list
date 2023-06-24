import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (        
        <HeaderStyle>
            <ContentStyle>
                <Link to ="/">
                <div>Jay's Todo-List</div>
                </Link>
                <HeaderRightStyle>
                    <Link to ="/">
                        <div>로그인</div>
                    </Link>
                    <Link to ="/signup">
                        <div>회원가입</div>
                    </Link>
                </HeaderRightStyle>
            </ContentStyle>
        </HeaderStyle>
    );
}
 
export default Header;

const HeaderStyle = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;    
    height: 60px;
    display: flex;    
    background-color: #141414;    
`

const ContentStyle = styled.div`
    display: flex;
    width: 96%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

  a {
    text-decoration: none;
  }
  a:link {
    color: #ffffff;
  }
  a:visited {
    color: #ffffff;
  }
`
const HeaderRightStyle = styled.div`
    display: flex;
    
    div {
        margin-left: 15px;
    }
`