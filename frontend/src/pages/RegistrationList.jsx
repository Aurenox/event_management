import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const API_URL = import.meta.env.VITE_API_URL;
function RegistrationList() {

    const [registrations, setRegistrations] = useState([]);
    const [search, setSearch] = useState("");
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        loadRegistrations();
    }, []);

    function loadRegistrations() {

        fetch(`${API_URL}/Registration`)
            .then(response => response.json())
            .then(data => {
                setRegistrations(data);
            });

    }

    function deleteRegistration() {

        fetch(`${API_URL}/Registration/${deleteId}`, {
            method: "DELETE"
        })
        .then(() => {

            setDeleteId(null);

            loadRegistrations();

        });

    }

    const filteredRegistrations = registrations.filter((registration) => {

        const keyword = search.trim().toLowerCase();

        return (
            registration.username?.toLowerCase().includes(keyword) ||
            registration.contact?.includes(keyword) ||
            registration.paymentStatus?.toLowerCase() === keyword
        );

    });

    return (
        <>

            <Navbar color="danger" />

            <div className="container mt-4">

                <h2 className="text-dark mb-4">
                    Registration List
                </h2>

                <div className="row mb-3">

                    <div className="col-md-12">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Name, Contact, Paid or Unpaid"
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </div>

                </div>

                <table className="table table-bordered table-hover">

                    <thead className="table-danger">

                        <tr>
                            <th>Username</th>
                            <th>Ticket Count</th>
                            <th>Contact</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            filteredRegistrations.map((registration) => (

                                <tr key={registration._id}>

                                    <td>{registration.username}</td>

                                    <td>{registration.ticketCount}</td>

                                    <td>{registration.contact}</td>

                                    <td>

                                        {
                                            registration.paymentStatus === "Paid" ?

                                                <span className="badge bg-success">
                                                    Paid
                                                </span>

                                                :

                                                <span className="badge bg-danger">
                                                    Unpaid
                                                </span>
                                        }

                                    </td>

                                    <td>

                                        <Link
                                            to={`/edit/${registration._id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-secondary btn-sm"
                                            onClick={() =>
                                                setDeleteId(
                                                    registration._id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

                <Link
                    to="/add"
                    className="btn btn-danger"
                >
                    + Add Registration
                </Link>

            </div>

            {
                deleteId && (

                    <div
                        className="modal d-block"
                        style={{
                            backgroundColor:
                                "rgba(0,0,0,0.6)"
                        }}
                    >

                        <div className="modal-dialog modal-dialog-centered">

                            <div className="modal-content border-danger">

                                <div className="modal-header bg-danger text-white">

                                    <h5 className="modal-title">
                                        Delete Registration
                                    </h5>

                                </div>

                                <div className="modal-body text-center">

                                    <h3 className="text-danger">
                                        ⚠ Are You Sure?
                                    </h3>

                                    <p className="mt-3">
                                        This registration will be
                                        permanently removed from the
                                        Event Registration Management
                                        System.
                                    </p>

                                    <p className="fw-bold text-danger">
                                        This action cannot be undone.
                                    </p>

                                </div>

                                <div className="modal-footer">

                                    <button
                                        className="btn btn-secondary"
                                        onClick={() =>
                                            setDeleteId(null)
                                        }
                                    >
                                        No, Keep It
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={deleteRegistration}
                                    >
                                        Yes, Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                )
            }

            <Footer color="danger" />

        </>
    );
}

export default RegistrationList;