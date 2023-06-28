import Header from "../Pages/Header";

const Layout = (props) => {
    return (
        <>
            <Header />            
            {props.children}            
        </>
    );
}
 
export default Layout;