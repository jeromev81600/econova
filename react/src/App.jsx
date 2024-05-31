import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Understand from "./pages/understand/Understand";
import Adapt from "./pages/adapt/Adapt";
import Act from "./pages/act/Act";
import Adhere from "./pages/adhere/Adhere";
import Contact from "./pages/contact/Contact";
import './App.scss'

function App() {

  return (
    <> 
     <Router basename="/econova">
     <div className="App">
       <Routes>
         <Route path="/" element={<Home />} />  
         <Route path="/understand" element={<Understand />} /> 
         <Route path="/adapt" element={<Adapt />} />  
         <Route path="/act" element={<Act />} />  
         <Route path="/adhere" element={<Adhere />} />  
         <Route path="/contact" element={<Contact />} /> 
       </Routes>
      </div>
     </Router>
    </>
  )
}

export default App;
