import AdminScript from "../adminAssets/adminScript";

const BtnScrollTop = () => {

    const { btnScrollVisible, scrollToTop } = AdminScript()

    return (
        <>
            <button className={btnScrollVisible ? 'btn btn-primary btn-scroll-top animate__animated animate__fadeIn' : 'd-none'} onClick={() => scrollToTop()}>
                <i className="fa-solid fa-angle-up"></i>
            </button>
        </>
    )
}

export default BtnScrollTop;