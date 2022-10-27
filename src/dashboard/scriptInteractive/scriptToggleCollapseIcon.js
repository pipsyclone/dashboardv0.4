import { useState } from "react"

const ToggleCollapseIcon = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    return {
        toggleIcon, setToggleIcon
    }
}

export default ToggleCollapseIcon;