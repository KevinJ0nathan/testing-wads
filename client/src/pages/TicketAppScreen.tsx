import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketAppScreen.css";
import { ticketService } from "../api/api";
import type { CreateTicketPayload } from "../api/api";
import logoPng from "../assets/text-logo-white.png";

interface TicketFormData {
    title: string;
    type: "IT System" | "Management";
    description: string;
}

interface Props {
    ownerId: string | null;
}

const TicketAppScreen = ({ ownerId }: Props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<TicketFormData>({
        title: "",
        type: "IT System",
        description: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (!ownerId) {
                setError("Please sign in to submit a ticket");
                setLoading(false);
                return;
            }

            // Submit the ticket
            const ticketData: CreateTicketPayload = {
                title: formData.title,
                type: formData.type,
                description: formData.description,
                assignee: "Unassigned", // Default assignee
                date_created: new Date().toISOString(),
                priority: "Medium", // Default priority
                status: "Unseen" // Default status
            };

            await ticketService.createTicket(ownerId, ticketData);

            // Redirect to tickets page on success
            navigate("/tickets");
        } catch (err) {
            setError("Failed to submit ticket. Please try again.");
            console.error("Error submitting ticket:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="top_container">
                <div className="name">
                    <img className="logo" src={logoPng} alt="Logo" />
                    <h2>Dentalign</h2>
                </div>

                <p className="text">We would always love to upgrade our system, to <br /> provide the best experience for our loyal beloved <br />customers.</p>
            </div>

            <div className="bottom_container">
                <h1 className="what">What can we do for you?</h1>
                <h6 className="send">Submit a ticket, so you will have a <br /> better experience!</h6>

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Title goes here..."
                            required
                        />

                        <label htmlFor="type">Type</label>
                        <select 
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="IT System">IT System</option>
                            <option value="Management">Management</option>
                        </select>

                        <label htmlFor="description">Description</label>
                        <textarea 
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Description goes here..."
                            required
                        ></textarea>

                        {error && <div className="error-message">{error}</div>}

                        <div className="buttons">
                            <button 
                                type="button" 
                                className="cancel_btn"
                                onClick={() => navigate("/tickets")}
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="send_btn"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TicketAppScreen;