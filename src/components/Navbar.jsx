import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar links">
      <Link to="/"> Home &nbsp; </Link> | &nbsp;  <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
