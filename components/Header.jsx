import { NavLink } from "react-router-dom"
export function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
}
return (
    <header>
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        <nav>
            <NavLink to="/host" style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
            <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
            <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
        </nav>
    </header>
)
}