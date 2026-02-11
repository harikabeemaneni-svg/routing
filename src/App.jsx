import { Dashboard } from "./Components/Dashboard.jsx"
import {Home} from "./Components/Home.jsx"
import { Login } from "./Components/Login.jsx"
import{BrowserRouter,Route,Routes,Link} from 'react-router-dom'
function App() {
  return(
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )

  
}

export default App