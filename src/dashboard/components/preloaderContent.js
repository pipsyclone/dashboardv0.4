import ScriptPreloaderContent from "../scriptInteractive/scriptPreloaderContent";

const PreloaderContent = () => {

    const {
        preloaderContentVisible
    } = ScriptPreloaderContent();

    return (
        <div className={preloaderContentVisible ? 'loading-content' : 'd-none'}>
            <span className="spinner-border"></span>
        </div>
    )
}

export default PreloaderContent;