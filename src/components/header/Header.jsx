import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.css";
import logo from '../../assets/home.png';


export default function Header() {

  return (
    <div className={`${classes.header} link-container`}>
      <div className={classes['home-container']}>
        <NavLink to="/">
          <img src={logo} alt="" className={classes['home-logo']} />
        </NavLink>
      </div>
      <div className={classes["link-common-container"]}>
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
      <div className={classes["btn-container"]}>
        <Link to={"/registration"}>
          <button type="button">Qeydiyyatdan keç</button>
        </Link>
        <Link to={"/login"}>
          <button type="button">Daxil ol</button>
        </Link>
      </div>
    </div>
  );
}
