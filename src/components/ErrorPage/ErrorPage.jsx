import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h2>Oops!!!</h2>

            <p>Page {error.statusText || error.message}</p>

            {
                error.status === 404 && (
                    <div>
                        <p>Go back where you from</p>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorPage;