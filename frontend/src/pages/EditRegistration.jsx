import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const API_URL = import.meta.env.VITE_API_URL;

function EditRegistration() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [ticketCount, setTicketCount] = useState("");
    const [contact, setContact] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");

    useEffect(() => {

        fetch(`${API_URL}/Registration/${id}`)
        .then(response => response.json())
        .then(data => {

            setUsername(data.username);
            setTicketCount(data.ticketCount);
            setContact(data.contact);
            setPaymentStatus(data.paymentStatus);

        });

    }, [id]);

    function updateRegistration(event) {

        event.preventDefault();

        fetch(`http://localhost:3000/Registration/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                ticketCount,
                contact,
                paymentStatus
            })

        })
        .then(response => response.json())
        .then(() => {

            navigate("/registrations");

        });

    }

    return (
        <>
            <Navbar color="warning"/>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-warning">
                        <h3>Edit Registration</h3>
                    </div>

                    <div className="card-body">

                        <form onSubmit={updateRegistration}>

                            <div className="mb-3">

                                <label className="form-label">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Ticket Count
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={ticketCount}
                                    onChange={(e) =>
                                        setTicketCount(e.target.value)
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Contact
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={contact}
                                    onChange={(e) =>
                                        setContact(e.target.value)
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Payment Status
                                </label>

                                <select
                                    className="form-select"
                                    value={paymentStatus}
                                    onChange={(e) =>
                                        setPaymentStatus(e.target.value)
                                    }
                                >
                                    <option value="Paid">
                                        Paid
                                    </option>

                                    <option value="Unpaid">
                                        Unpaid
                                    </option>
                                </select>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-warning"
                            >
                                Update Registration
                            </button>

                        </form>

                    </div>

                </div>

            </div>

            <Footer color="warning"/>
        </>
    );
}

export default EditRegistration;