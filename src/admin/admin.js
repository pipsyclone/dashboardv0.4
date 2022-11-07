import { Link } from 'react-router-dom'

import AdminScript from './adminAssets/adminScript'

import Modal from './components/modal'
import BtnScrollTop from './components/btnScrollTop'

import FotoUser from './adminAssets/img/user.png'
import './adminAssets/adminStyle.css'

const Admin = (props) => {

    const {
        windowSize, 
        iconCollapse, setIconCollapse,
        sidebarToggle, setSidebarToggle, sidebarToggleResponsive, sidebarBackdrop, iconSidebarToggler, contentWrapperResponsive
    } = AdminScript()

    return (
        <>
            <div id="app">
                <section id="sidebar">
                    {/* Sidebar Here */}
                    <div className={sidebarToggleResponsive}>
                        <div className='sidebar-brand'>
                            <Link className='sidebar-brand-text'>
                                MyDashboard
                            </Link>

                            {/* btn close sidebar for mobile */}
                            {
                                windowSize <= 850 ?
                                    sidebarToggle ?
                                        <button className='btn btn-light rounded-0 btn-close-sidebar-mobile' onClick={() => setSidebarToggle(false)}>
                                            <i className='fa-solid fa-xmark fs-3'></i>
                                        </button>
                                    :
                                        null
                                :   null
                            }
                        </div>
                        <hr />
                        <div className='vstack mt-5'>
                            <Link className='btn btn-primary w-100 mb-3 text-start' to={'/admin'}>
                                <i className='fa-solid fa-tachometer col-2 text-center'></i>
                                Dashboard
                            </Link>
                            <Link className='btn btn-light w-100 mb-3 text-start' to={'/admin/auth-pages'}>
                                <i className='fa-solid fa-user-gear col-2 text-center'></i>
                                Auth Pages
                            </Link>
                            <div className='mb-3'>
                                <button className='btn btn-light w-100 text-start' data-bs-toggle="collapse" data-bs-target="#menuCollapse1" onClick={() => setIconCollapse(!iconCollapse)}>
                                    <i className='fa-solid fa-pager col-2 text-center'></i>
                                    <span>Menu Collapse</span>
                                    <span className='float-end'>
                                        <i className={iconCollapse ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
                                    </span>
                                </button>

                                <div className='collapse v-stack bg-light p-3 mt-3' id='menuCollapse1'>
                                    <Link className='btn btn-outline-primary w-100 mb-3'>Sub Menu</Link>
                                    <Link className='btn btn-outline-primary w-100 mb-3'>Sub Menu</Link>
                                    <Link className='btn btn-outline-primary w-100'>Sub Menu</Link>
                                </div>
                            </div>
                            <Link className='btn btn-light w-100 mb-3 text-start' to={'/admin/url-not-found'}>
                                <i className='fa-solid fa-warning col-2 text-center'></i>
                                Page Error
                            </Link>
                        </div>
                    </div>
                    <div className={sidebarBackdrop}></div>
                </section>

                <div className={contentWrapperResponsive} id="content-wrapper">
                    <section className='navbar navbar-expand-sm' id="topbar">
                        <div className="bg-topbar"></div>

                        {/* Topbar Here */}
                        <div className='container-fluid'>
                            <button className='btn btn-link text-decoration-none text-white' onClick={() => setSidebarToggle(!sidebarToggle)}>
                                <i className={iconSidebarToggler}></i>
                            </button>

                            <ul className='navbar-nav ms-auto'>
                                <li className='nav-item'>
                                    <div className='dropdown'>
                                        <button className='btn btn-link text-decoration-none dropdown-toggle text-white' data-bs-toggle="dropdown" data-bs-target="#dropdownMenuProfile">
                                            <img src={FotoUser} className="img-fluid" width={40} />
                                            <span className='ms-2 username-display'>Hi, Your Name</span>
                                        </button>

                                        <ul className='dropdown-menu dropdown-menu-end p-2 position-absolute' id='dropdownMenuProfile'>
                                            <li className='mb-2'>
                                                <Link className='dropdown-item' to={'/admin/setting'}>
                                                    <i className='fa-solid fa-gear me-2'></i>
                                                    Setting
                                                </Link>
                                            </li>
                                            <li>
                                                <button className='dropdown-item text-danger' data-bs-toggle="modal" data-bs-target="#logoutModal">
                                                    <i className='fa-solid fa-power-off me-2'></i>
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section id="content">
                        {/* Content Here */}
                        { props.content }
                    </section>

                    <section id="footer">
                        <div className='text-muted'>
                            Licensed By MyProjectPips @Copyright 2022
                        </div>
                    </section>
                </div>

                <BtnScrollTop />

                <Modal />
            </div>
        </>
    )
}

export default Admin;