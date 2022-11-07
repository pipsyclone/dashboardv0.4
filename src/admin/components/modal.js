const Modal = () => {
    return (
        <>
            <div className="modal fade" data-bs-backdrop="static" id="logoutModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <span className="fs-4">Are you sure you want to logout?</span>
                        </div>
                        <div className="modal-footer justify-content-center p-0 clearfix">
                            <button className="btn btn-link text-decoration-none text-danger text-center col-sm-5" data-bs-dismiss="modal">
                                Yes, Confirm
                            </button>
                            <button className="btn btn-link text-decoration-none text-center col-sm-5" data-bs-dismiss="modal">
                                No, Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;