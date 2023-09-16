
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App()  {

  return (
    <div className="App ">
    <BrowserRouter>
    <Header/>
      <Routes>
      
        <Route  path='/' element={< Home />}></Route>
        <Route  path='/signin' element={< SignInSide />}></Route>
        <Route  path='/signup' element={< SignUp />}></Route>
        {/* <Route exact path='/admin' element={< Admin />}></Route> */}
          <Route path="*" element={<h1>no Page</h1>} />
      </Routes>
   

    </BrowserRouter>


  </div>
  )
}

export default App;
