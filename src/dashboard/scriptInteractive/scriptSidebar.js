import { useState } from "react";

import Script from "../../assets/script";

const ScriptSidebar = () => {
    const { windowSize } = Script();
    
    // Toggler Sidebar
    const [getSidebar, setSidebar] = useState(true);

    const sidebarResponsive = windowSize <= 850 ? getSidebar ? 'sidebar ml-min-280' : 'sidebar' : getSidebar ? 'sidebar' : 'sidebar ml-min-280'
    const sidebarBackdrop   = windowSize <= 850 ? getSidebar ? '' : 'sidebar-backdrop' : '';
    const contentResponsive = getSidebar ? 'flex-fill ml-280' : 'flex-fill ml-0';

    return {
        getSidebar, setSidebar, sidebarResponsive, sidebarBackdrop, contentResponsive
    }
}

export default ScriptSidebar;