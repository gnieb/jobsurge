import { NavLink } from "react-router-dom"

export default function Nav(){

    return(
        <nav>
        <NavLink to="/" exact>HOME</NavLink>
        <NavLink to="/jobs" exact>JOBS</NavLink>
        </nav>
    )
}