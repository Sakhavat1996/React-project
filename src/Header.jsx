import { NavLink } from "react-router-dom";
export default function Header() {
    return(
        <div className="link-container">
            <NavLink 
                to='/'
                className={({isActive})=>isActive ? 'active' : 'link'}>Home
            </NavLink>
            <NavLink 
                to='/about'
                className={({isActive})=>isActive ? 'active' : 'link'}>About
            </NavLink>
            <NavLink 
                to='/products'
                className={({isActive})=>isActive ? 'active' : 'link'}>Products
            </NavLink>
        </div>
    )
}