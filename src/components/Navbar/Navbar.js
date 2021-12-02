import {  NavLink } from "react-router-dom"
import Button from "../Button/Button";
const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-blue'>
            <div className='container'>
                
				<NavLink to='/my-profile'>My profile</NavLink>
				<NavLink to='/dashboard'>dashboard</NavLink>
				<NavLink to='/help'>help</NavLink>
				<NavLink to='/training'>training</NavLink>
			</div>
        </nav>
			
		);
}

export default Navbar


