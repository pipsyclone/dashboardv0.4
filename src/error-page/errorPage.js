import { Helmet } from "react-helmet";

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>404 Page Not Found!</title>
            </Helmet>

            <div className="error">
                <h3>Error 404!, Page Not Found!</h3>
                <span>Please Back To Home</span>
                <br/>
                <a className="btn btn-primary mt-3" href='/'>
                    <i className="fa-solid fa-home me-2"></i> Home
                </a>
            </div>
        </>
    )
}

export default ErrorPage;