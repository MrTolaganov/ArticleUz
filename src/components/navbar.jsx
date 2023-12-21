import { Link } from "react-router-dom";
import { logo } from "../constants";
import "../scss/header.scss";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom container">
      <Link to={"/"} className="d-flex align-items-center text-decoration-none">
        <img src={logo} alt="" width={100} height={100} />
        <h1 className="header-name">ArticleUz</h1>
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link
          to={"/login"}
          className="me-3 py-2 link-body-emphasis text-decoration-none"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="me-3 py-2 link-body-emphasis text-decoration-none"
        >
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
