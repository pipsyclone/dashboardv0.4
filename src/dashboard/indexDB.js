import { Routes, Route, Link } from "react-router-dom";

// Assets/Style
import LogoUser from './assets/img/user.png'
import './assets/styleDB.css'

// URL/Script
import Url from "../baseURL/url";
import ScriptSidebar from "./scriptInteractive/scriptSidebar";
import Script from "../assets/script";
import ToggleCollapseIcon from "./scriptInteractive/scriptToggleCollapseIcon";

// Components
import BtnScrollTop from "./components/btnScrollTop";

// Content
import ErrorPage from "./error/error";
import Dashboard from "./content/dashboard";

const IndexDB  = () => {

    const {
        DBmainURL
    } = Url();
    
    const {
        windowSize
    } = Script();

    const {
        getSidebar, setSidebar, sidebarResponsive, sidebarBackdrop, contentResponsive
    } = ScriptSidebar();

    const {
        toggleIcon, setToggleIcon
    } = ToggleCollapseIcon();

    return (
        <>
            <div className="d-flex" id="app">

                {/* Sidebar */}
                <div id="sidebar">

                    <div className={sidebarResponsive}>
                        <button className="btn btn-link text-decoration-none text-secondary" type="button" onClick={() => setSidebar(!getSidebar)} id="btnTogglerResponsif">
                            <i className='fa-solid fa-xmark' id='iconTogglerResponsif'></i>
                        </button>

                        <div className="text-center">
                            <Link className='btn btn-link text-decoration-none sidebar-brand' to={DBmainURL}>
                                My Dashboard
                            </Link>
                        </div>
        
                        <hr className='mb-5'/>
        
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="btn btn-primary w-100 mb-2 text-start" to={DBmainURL}>
                                    <span className="pe-3">
                                        <i className="fa-solid fa-gauge"></i>
                                    </span>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-light w-100 mb-2 text-start" to={''}>
                                    <span className="pe-3">
                                        <i className="fa-solid fa-circle-user"></i>
                                    </span> 
                                    Menu 1
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <button className='btn btn-light mb-2 w-100 text-start' data-bs-toggle='collapse' data-bs-target='#menuCollapse' onClick={() => setToggleIcon(!toggleIcon)}>
                                    <span className="pe-3">
                                        <i className="fa-solid fa-laptop-code"></i>
                                    </span> 
                                    Menu Collapse
                                    <span className="float-end">
                                        {
                                            toggleIcon ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-right"></i>
                                        }
                                    </span>
                                </button>
                                <div className="collapse" id="menuCollapse">
                                    <div className="card card-body bg-light border-0">
                                        <Link className="btn btn-outline-primary w-100 mb-2" to={''}>
                                            Sub Menu 1
                                        </Link>
                                        <Link className="btn btn-outline-primary w-100 mb-2" to={''}>
                                            Sub Menu 2
                                        </Link>
                                        <Link className="btn btn-outline-primary w-100 mb-2" to={''}>
                                            Sub Menu 3
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={sidebarBackdrop}></div>

                </div>
                
                {/* Content Wrapper */}
                <div className={contentResponsive} id="content-wrapper">

                    {/* Topbar */}
                    <div id='topbar'>
                        <div className='bg-topbar'></div>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button className="btn btn-link text-decoration-none text-secondary text-white" type="button" onClick={() => setSidebar(!getSidebar)}>
                                    <i className={getSidebar ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} id='iconTogglerDekstop'></i>
                                    <i className='fa-solid fa-bars' id='iconTogglerResponsif'></i>
                                </button>

                                <div className='dropdown ms-auto'>
                                    <button className='btn btn-link text-decoration-none text-white' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        <img src={LogoUser} className='img-fluid rounded-circle' width='40px' />
                                        {windowSize <= 850 ? '' : <span className="ms-2">Hi, Your Name</span>}
                                    </button>
    
                                    <ul className='dropdown-menu dropdown-menu-end p-2 position-absolute'>
                                        <li>
                                            <a className='btn btn-light mb-1 w-100' to={''}>
                                                <i className='fa-solid fa-gear me-2'></i> Setting
                                            </a>
                                        </li>
                                        <li>
                                            <a className='btn btn-light text-danger w-100' data-bs-toggle="modal" data-bs-target="#modalLogoutConfirm">
                                                <i className='fa-solid fa-right-to-bracket me-2'></i> Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* Content */}
                    <div id="content">
                        <Routes>
                            <Route path={DBmainURL} element={<Dashboard />} />
                            <Route path="*" element={<ErrorPage title="404 Page Not Found!" errorCode="404" status="Page Not Found!" message="Please back to home!" UrlHome={DBmainURL} />} />
                        </Routes>
                    </div>

                    {/* Footer */}
                    <footer id="footer">
                        <div className="text-muted">
                            Licensed By Me @ Copyright 2022
                        </div>
                    </footer>

                </div>
            </div>

            <BtnScrollTop />
        </>
    )
}

export default IndexDB;