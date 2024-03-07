import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
export default function Header() {
  return (
    <div className={`${classes.header} link-container`}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Products
      </NavLink>
    </div>
  );
}
