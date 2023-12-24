import Home from "./Components/Home"
import Blogs from "./Components/Blogs"
import Contact from "./Components/Contact"
import Navigation from "./Components/Navigation"
import "./style.css"

import {Routes,Route} from "react-router-dom"



const App=()=>{

  return(
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
  )
}
export default App