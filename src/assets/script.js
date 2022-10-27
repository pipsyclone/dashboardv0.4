import { useState, useEffect } from 'react'

const Script = () => {
    // Check Width
    const [windowSize, setWindowSize]   = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize])

    // Button back to top
    const [btnTopVisible, setBtnTopVisible] = useState(false)

    const toggleBtnTopVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        
        if (scrolled > 100) {
            setBtnTopVisible(true)
        }else{
            setBtnTopVisible(false)
        }
    }

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
        });
    };

    window.addEventListener('scroll', toggleBtnTopVisible);

    return {
        windowSize,
        btnTopVisible, scrollToTop
    }
}

export default Script;