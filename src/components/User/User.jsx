import { Link } from "react-router-dom";
import "./User.css"

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    return (
        <div className="userStyle">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default User;

