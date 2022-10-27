import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import PreloaderContent from "../components/preloaderContent";
import ScriptPreloaderContent from "../scriptInteractive/scriptPreloaderContent";

const ErrorPage = (props) => {

    const {
        contentVisible
    } = ScriptPreloaderContent();

    return (
        <>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>

            <PreloaderContent />

            <div className={contentVisible ? '' : 'd-none'}>
                {/* Content Breadcrumd */}
                <div className='bg-white p-3 d-flex align-items-center mb-3' id='breadcrumb-content'>
                    <span>
                        <b>{props.status}</b>
                    </span>
                </div>
                
                <div className="error-404">
                    <h3>Error {props.errorCode}!, {props.status}</h3>
                    <span>{props.message}</span>
                    <br/>
                    <Link className="btn btn-primary mt-3" to={props.UrlHome}>
                        <i className="fa-solid fa-home me-2"></i> Home
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;