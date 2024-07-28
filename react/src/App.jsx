import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Understand from "./pages/Understand/Understand";
import Adapt from "./pages/Adapt/Adapt";
import Act from "./pages/Act/Act";
import Adhere from "./pages/Adhere/Adhere";
import Contact from "./pages/Contact/Contact";
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
