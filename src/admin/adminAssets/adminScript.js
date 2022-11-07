import { useState, useEffect } from "react"

const AdminScript = () => {
    // Check Width
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize])

    // Icon Collapse Toggle
    const [iconCollapse, setIconCollapse] = useState(false);

    // Dashboard Responsive
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const sidebarToggleResponsive = windowSize <= 850 ? sidebarToggle ? 'sidebar' : 'sidebar ml-min-300' : sidebarToggle ? 'sidebar ml-min-300' : 'sidebar'
    const sidebarBackdrop = windowSize <= 850 ? sidebarToggle ? 'sidebar-backdrop' : null : null
    const iconSidebarToggler = windowSize <= 850 ? 'fa-solid fa-bars fs-4' : sidebarToggle ? 'fa-solid fa-bars fs-4' : 'fa-solid fa-xmark fs-4'
    const contentWrapperResponsive = windowSize <= 850 ? null : sidebarToggle ? null  : 'ml-300'

    // Toggle Show Hide Password
    const [passwordToggle, setPasswordToggle] = useState(false)

    // Button Scroll Top
    const [btnScrollVisible, setBtnScrollVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBtnScrollVisible(true);
            }else{
                setBtnScrollVisible(false)
            }
        });
    }, []);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
        });
    };

    return {
        windowSize,
        iconCollapse, setIconCollapse,
        sidebarToggle, setSidebarToggle, sidebarToggleResponsive, sidebarBackdrop, iconSidebarToggler, contentWrapperResponsive,
        passwordToggle, setPasswordToggle,
        btnScrollVisible, scrollToTop
    }
}

export default AdminScript;