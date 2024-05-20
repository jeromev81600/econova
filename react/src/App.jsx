import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.scss'

function App() {

  return (
    <>
     <Router basename="/econova">
     <div className="App">
       <Routes>
         <Route path="/" element={<Home />} />  
       </Routes>
      </div>
     </Router>
    </>
  )
}

export default App;
