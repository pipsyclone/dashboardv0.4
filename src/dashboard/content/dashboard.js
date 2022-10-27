import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

// URL/Script
import PreloaderContent from "../components/preloaderContent";
import ScriptPreloaderContent from "../scriptInteractive/scriptPreloaderContent";

const Dashboard = () => {

    // const {
    //     baseUrlDB
    // } = Url();

    const {
        contentVisible
    } = ScriptPreloaderContent();

    return (
        <>
            <Helmet>
                <title>Welcome To Dashoard</title>
            </Helmet>

            <PreloaderContent />

            <div className={contentVisible ? '' : 'd-none'}>
                {/* Content Breadcrumd */}
                <div className='bg-white p-3 d-flex align-items-center mb-3'>
                    <span>
                        <b>Dashboard</b>
                    </span>

                    <div className='ms-auto hstack gap-2'>
                        <small>
                            <Link className='text-decoration-none' to={'/'}>Home</Link>
                        </small>
                        <div className="vr"></div>
                        <small>Dashboard</small>
                    </div>
                </div>

                {/* Content Card */}
                <div className="container-fluid">
                    <div className="card border-0 mb-3">
                        <div className="card-body">
                            Dashboard
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;