
import './App.css'
import { Register } from './assets/components/Register';
import { HomePage } from './assets/components/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SuccessfulSubmit } from './assets/components/SuccessfulSubmit';


function App() {


  return (
    <>
      <div>
    
      <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/success' element={<SuccessfulSubmit />}>
      
      </Route>
    </Routes>
  </BrowserRouter>
        
    
      </div>
    </>
  )
}

export default App
