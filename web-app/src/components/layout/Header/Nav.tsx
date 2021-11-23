import { Link } from "react-router-dom";

interface NavData {
}

export default function Nav(props: NavData) {
  

  return (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/contact'}>Contact</Link>
    </nav>
  );
}