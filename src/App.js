import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotels from "./pages/Hotels/hotels";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/hotels" element = {<List/>}/>
        <Route path = "/hotels/:id" element = {<Hotels/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotels from "./pages/Hotels/hotels";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Profile from "./pages/Profile/Profile";

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/hotels" element = {<List/>}/>
        <Route path = "/hotels/:id" element = {<Hotels/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/profile" element = { <Profile />} />
      </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;