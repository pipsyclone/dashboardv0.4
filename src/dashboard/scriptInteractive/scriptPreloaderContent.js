import { useState } from "react"

const ScriptPreloaderContent = () => {
    const [contentVisible, setContentVisible] = useState(false)
    const [preloaderContentVisible, setPreloaderContentVisible] = useState(true)

    setTimeout(function () {
        setContentVisible(true)
        setPreloaderContentVisible(false)
    }, 1500)

    return {
        contentVisible, preloaderContentVisible
    }
}

export default ScriptPreloaderContent;