import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar" style={{backgroundColor: "#708090"}}>
            <div className="container d-flex justify-content-evenly">
                <NavLink to="/" className="btn btn-outline-dark">Home</NavLink>
                <NavLink to="/contact" className="btn btn-outline-dark">Contact</NavLink>
                <NavLink to="/blog" className="btn btn-outline-dark">Blog</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
