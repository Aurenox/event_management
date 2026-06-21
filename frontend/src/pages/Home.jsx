import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <Navbar />

      <div className="container-fluid mt-5 ">

        <div className="text-center">

          <h1 className="display-4 text-primary">
            Event Registration Management System
          </h1>

          <p className="lead">
            Manage event registrations securely and efficiently.
          </p>

          <Link
            to="/registrations"
            className="btn btn-primary btn-lg mt-4"
          >
            View Registrations
          </Link>

        </div>

        <div className="mt-5">

          <h2 className="text-primary">About This Website</h2>

          <p>
            This platform helps organizers manage attendee
            registrations, ticket counts, payment status
            and contact details securely.
          </p>

        </div>

        <div className="row mt-4 mb-5 pb-5">

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Secure Storage</h4>
              <p>Store registration data securely.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Payment Tracking</h4>
              <p>Track paid and unpaid registrations.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Easy Management</h4>
              <p>Add, Edit and Delete registrations.</p>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;