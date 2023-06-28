import { BrowserRouter,Routes, Route } from "react-router-dom"

import ToDo from "Pages/ToDo"
import Home from "Pages/Home"
import SignIn from "Pages/SignIn"
import SignUp from "Pages/SignUp"
import Layout from "Shared/Layout"

const Router = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/todo" element={<ToDo />} />
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/signin" element={<SignIn />} /> 
                <Route path="/" element={<Home />} />       
            </Routes>
        </Layout>
    </BrowserRouter>
    );
}
 
export default Router;