import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import AdminScript from "../adminAssets/adminScript";

const AuthPages = () => {

    const { passwordToggle, setPasswordToggle } = AdminScript()

    return (
        <>
            <Helmet>
                <title>Auth Pages - Login & Register</title>
            </Helmet>

            
            <div className="bg-white p-3 clearfix mb-3">
                <span className="float-start">
                    <b>Auth Pages</b>
                </span>

                <span className="float-end hstack gap-3">
                    <Link to={'/admin'}>Home</Link>
                    <div className="vr"></div>
                    <span>Auth Pages</span>
                </span>
            </div>

            <div className="container-fluid">
                
                <div className="row justify-content-center container mx-auto">
                    <div className="card p-0 col-sm-4 m-3 align-self-start">
                        <div className="card-body">
                            <h4 className="text-center">LOGIN</h4>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <label>Username</label>
                                    <input type={'text'} name={'username'} className={'form-control'} placeholder={'Username'} />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <div className="input-group">
                                        <input type={passwordToggle ? 'text' : 'password'} name={'password'} className="form-control" placeholder={'Password'} />
                                        <span className="input-group-text cursor-pointer" onClick={() => setPasswordToggle(!passwordToggle)}>
                                            <i className={passwordToggle ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
                                        </span>
                                    </div>
                                </div>

                                <button className="btn btn-primary rounded-0 w-100">
                                    LOGIN
                                </button>
                            </form>
                            
                            <div className="text-center mt-3">
                                <small>
                                    Don't have an account ? <Link to={''}>Register</Link>
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="card col-sm-4 m-3 align-self-start">
                        <div className="card-body">
                            <h3 className="text-center">REGISTER</h3>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <label>Full Name</label>
                                    <input type={'text'} name={'fullname'} className={'form-control'} placeholder={'Full Name'} />
                                </div>
                                <div className="mb-3">
                                    <label>Email Address</label>
                                    <input type={'email'} name={'email'} className={'form-control'} placeholder={'Email Address'} />
                                </div>
                                <div className="mb-3">
                                    <label>Username</label>
                                    <input type={'text'} name={'username'} className={'form-control'} placeholder={'Username'} />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type={passwordToggle ? 'text' : 'password'} name={'password'} className={'form-control'} placeholder={'Password'} />
                                </div>
                                <div className="mb-3">
                                    <label>Confirm Password</label>
                                    <input type={passwordToggle ? 'text' : 'password'} name={'confirm_password'} className={'form-control'} placeholder={'confirm Password'} />
                                </div>

                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="showHidePassword" value={passwordToggle} onChange={() => setPasswordToggle(!passwordToggle)} />
                                    <label className="form-check-label" htmlFor="showHidePassword">
                                        Show Password
                                    </label>
                                </div>

                                <button className="btn btn-success rounded-0 w-100">
                                    REGISTER
                                </button>
                            </form>

                            <div className="text-center mt-3">
                                <small>Already have an account? <Link to={''}>Login</Link></small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AuthPages;