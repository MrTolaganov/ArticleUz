import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../constants";
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../slice/auth";
import "../scss/header.scss";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    removeItem("token");
    navigate("/login");
    dispatch(logoutUser());
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom container">
      <Link to={"/"} className="d-flex align-items-center text-decoration-none">
        <img src={logo} alt="" width={100} height={100} />
        <h1 className="header-name">ArticleUz</h1>
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {isLoggedIn ? (
          <>
            <p className="me-3 py-2 m-0 text-dark text-decoration-none">
              {user.username}
            </p>
            <Link
              className="me-3 py-2 m-0 text-dark text-decoration-none"
              to={"/create-article"}
            >
              Create
            </Link>
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
