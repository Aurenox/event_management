import { Link } from "react-router-dom";

function Navbar({ color = "primary"}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
      <div className="container">

<Link className="navbar-brand fw-bold" to="/">

    <span className="fs-4">
        Event<span className="text-dark">Sphere</span> |
    </span>

    <small
        className="text-light opacity-75 ms-1 text-dark"
        style={{ fontSize: "11px" }}
    >
       Where Events Come Alive.
    </small>

</Link>
        <div>
          <Link
            className={`btn btn-light me-2 rad text-${color}`}
            to="/"
          >
            Home
          </Link>

          <Link
            className={`btn btn-light me-2 rad text-${color}`}
            to="/registrations"
          >
            Dashboard
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;