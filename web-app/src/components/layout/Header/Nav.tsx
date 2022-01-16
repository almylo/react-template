import { Link } from "react-router-dom";
import './Nav.scss';

export default function Nav() {
  

  return (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/contact'}>Contact</Link>
    </nav>
  );
}