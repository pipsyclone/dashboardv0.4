import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"

const Error404 = () => {

    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title>Error 404, Page Not Found!</title>
            </Helmet>
            
            <div className="error-page">
                <h3>Error 404, Page Not Found!</h3>
                <span>You played too far, please come back</span>
                <br />
                <br />
                <button className="btn btn-primary" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default Error404;