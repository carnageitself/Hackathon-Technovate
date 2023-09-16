
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import Header from './component/Header'
function App()  {

  return (
    <div className="App ">
    <BrowserRouter>
     <Header/>
      <Routes>
      
        <Route  path='/' element={< Home />}></Route>
        {/* <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/admin' element={< Admin />}></Route> */} 
          <Route path="*" element={<h1>no Page</h1>} />
      </Routes>
   

    </BrowserRouter>


  </div>
  )
}

export default App;
