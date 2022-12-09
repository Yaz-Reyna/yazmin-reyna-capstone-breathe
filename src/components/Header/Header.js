import logo from "../../assets/logo/logo-cursive.png";
import '../Header/Header.scss';
import {NavLink} from "react-router-dom";

function Header () {
    return (
        <header>
            <nav className="nav-bar">
                <a href="/" className="nav-bar__logo-link">
                    <img className="nav-bar__logo" src={logo} alt="Breathe logo"/>
                </a>

                <div className="nav-bar__links-container">
                    <div className="nav-bar__links-container--left">
                        <NavLink to='/' className="nav-bar__links-container--link">
                            Home
                        </NavLink>
                        <NavLink to='/exercises' className="nav-bar__links-container--link">
                            Exercises
                        </NavLink>
                    </div>
                    <div className="nav-bar__links-container--right">
                        <NavLink to='/music' className="nav-bar__links-container--link">
                            Music 
                        </NavLink>
                        <NavLink to='/quotes' className="nav-bar__links-container--link">
                            Quotes and Jokes
                        </NavLink>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;