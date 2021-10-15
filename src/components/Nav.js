import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><h2><NavLink to="members" activeClassName='active'>Members</NavLink></h2></li>
        <li><h2><NavLink to="search" activeClassName='active'>Search</NavLink></h2></li>
      </ul>
    </nav>
  )
}

export default Nav;
