import Script from "../../assets/script"

const BtnScrollTop = () => {
    
    const {
        btnTopVisible, scrollToTop
    } = Script();

    return (
        <button className={btnTopVisible ? 'btn btn-primary btn-scroll animate__animated animate__fadeIn' : 'd-none'} onClick={() => scrollToTop()}>
            <i className="fa-solid fa-angle-up"></i>
        </button>
    )
}

export default BtnScrollTop;