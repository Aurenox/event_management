import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddRegistration() {

    const [username, setUsername] = useState("");
    const [ticketCount, setTicketCount] = useState("");
    const [contact, setContact] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Paid");

    const navigate = useNavigate();

    function saveRegistration(event) {

        event.preventDefault();

        fetch("http://localhost:3000/Registration", {

            method: "POST",

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
            <Navbar color="success" />

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-success ">
                        <h3>Add Registration</h3>
                    </div>

                    <div className="card-body">

                        <form onSubmit={saveRegistration}>

                            <div className="mb-3">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Ticket Count</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={ticketCount}
                                    onChange={(e) =>
                                        setTicketCount(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Contact</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={contact}
                                    onChange={(e) =>
                                        setContact(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Payment Status</label>

                                <select
                                    className="form-select"
                                    value={paymentStatus}
                                    onChange={(e) =>
                                        setPaymentStatus(e.target.value)
                                    }
                                >
                                    <option>Paid</option>
                                    <option>Unpaid</option>
                                </select>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Save Registration
                            </button>

                        </form>

                    </div>

                </div>

            </div>

            <Footer color="success" />
        </>
    );
}

export default AddRegistration;