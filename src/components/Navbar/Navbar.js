import {  Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-blue'>
            <div className='container'>
                
				<Link to='/my-profile'>My profile</Link>
				<Link to='/dashboard'>dashboard</Link>
				<Link to='/help'>help</Link>
				<Link to='/training'>training</Link>
			</div>
        </nav>
			
		);
}

export default Navbar


