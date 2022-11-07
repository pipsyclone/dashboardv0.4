import { Helmet } from "react-helmet"

import CardMonitoring from "../components/cardMonitoring";

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Welcome To Dashboard</title>
            </Helmet>

            <div className="container-fluid">
                
                <CardMonitoring />

                <div className="card">
                    <div className="card-body">
                        Dashboard
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;