import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h4>Page Not Found </h4>
            <Link to="/" className="btn btn-outline-dark">Back to Home</Link>
        </div>
    )
}

export default NotFound
