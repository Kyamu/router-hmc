import { NavLink } from "react-router-dom"

const Navigation=()=>{
    return(
        <div className="nav">
            <NavLink to="/" className="Link">Home</NavLink>
            <NavLink to="/blogs" className="Link">Blogs</NavLink>
            <NavLink to="/contact" className="Link">Contact</NavLink>
        </div>
    )
}
export default Navigation