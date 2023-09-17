
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Contact from "./pages/contact";
import GuideLines from "./pages/GuideLines";
function App()  {

  return (
    <div className="App ">
    <BrowserRouter>
  
      <Routes>
      
        <Route  path='/' element={  <> <Header/>< Home /></>}></Route>
        <Route  path='/signin' element={< SignInSide />}></Route>
        <Route  path='/signup' element={< SignUp />}></Route>
        <Route  path='/profile' element={<> <Header/>< Profile  /></>}></Route>
        <Route  path='/request' element={<> <Header/>< RequestOrgan  /></>}></Route>
        <Route  path='/contact' element={<> <Header/>< Contact /></>}></Route>
        <Route  path='/guidelines' element={<> <Header/>< GuideLines /></>}></Route>
        {/* <Route exact path='/admin' element={< Admin />}></Route> */}
          {/* <Route path="*" element={<h1>no Page</h1>} /> */}
      </Routes>
   

    </BrowserRouter>


  </div>
  )
}

export default App;
