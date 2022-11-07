const CardMonitoring = () => {
    return (
        <div className="row mx-auto justify-content-center mb-5">

            <div className="card col-sm border-0 border-start border-success border-5 card-monitoring-margin">
                <div className="card-body text-success">
                    <h5>Balance</h5>
                    <div className="clearfix mb-2">
                        <span className="fs-4">
                            <i className="fa-solid fa-dollar"></i>
                        </span>
                        <span className="float-end fs-4">
                            <b>Rp. 300.000</b>
                        </span>
                    </div>
                    <hr />
                    <span>Your balance</span>
                </div>
            </div>
            <div className="card col-sm border-0 border-start border-primary border-5 card-monitoring-margin">
                <div className="card-body text-primary">
                <h5>Orders</h5>
                    <div className="clearfix mb-2">
                        <span className="fs-4">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                        </span>
                        <span className="float-end fs-4">
                            <b>100</b>
                        </span>
                    </div>
                    <hr />
                    <span>Orders in every day</span>
                </div>
            </div>
            <div className="card col-sm border-0 border-start border-danger border-5 card-monitoring-margin">
                <div className="card-body text-danger">
                    <h5>Product</h5>
                    <div className="clearfix mb-2">
                        <span className="fs-4">
                            <i className="fa-solid fa-boxes"></i>
                        </span>
                        <span className="float-end fs-4">
                            <b>200</b>
                        </span>
                    </div>
                    <hr />
                    <span>Total product on database</span>
                </div>
            </div>
            <div className="card col-sm border-0 border-start border-info border-5 card-monitoring-margin">
                <div className="card-body text-info">
                    <h5>Users</h5>
                    <div className="clearfix mb-2">
                        <span className="fs-4">
                            <i className="fa-solid fa-users"></i>
                        </span>
                        <span className="float-end fs-4">
                            <b>2</b>
                        </span>
                    </div>
                    <hr />
                    <span>Total users on database</span>
                </div>
            </div>

        </div>
    )
}

export default CardMonitoring;