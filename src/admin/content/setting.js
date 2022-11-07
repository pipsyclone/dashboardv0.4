import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

import AdminScript from "../adminAssets/adminScript";

const Setting = () => {

    const { passwordToggle, setPasswordToggle } = AdminScript();
    const [settingChange, setSettingChange] = useState("Profile Information");

    const ProfileInformation = () => {
        return (
            <div className="card col-sm border-0 border-start border-5 border-primary align-self-start m-3">
                <div className="card-body">
                    <h3>Profile Information</h3>
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

                        <button className="btn btn-primary rounded-0 float-end">Save</button>
                    </form>
                </div>
            </div>
        )
    }

    const Account = () => {
        return (
            <div className="card col-sm border-0 border-start border-5 border-danger align-self-start m-3">
                <div className="card-body">
                    <h3>Account</h3>
                    <hr />
                    <span className="text-danger">
                        This is the setting for deleting your account, if you want to delete your account then you should think twice, because deletion of this account is permanent.
                    </span>
                    <form className="mt-3">
                        <div className="mb-3">
                            <label className="mb-3">Email Address</label>
                            <input type={'email'} name={'email'} className={'form-control'} placeholder={'Email Address'} />
                        </div>

                        <button className="btn btn-danger rounded-0 float-end">Send Email</button>
                    </form>
                </div>
            </div>
        )
    }

    const Security = () => {
        return (
            <div className="card col-sm border-0 border-start border-5 border-warning align-self-start m-3">
                <div className="card-body">
                    <h3>Security</h3>
                    <hr />
                    <form className="mt-3">
                        <div className="mb-3">
                            <label>Password</label>
                            <input type={passwordToggle ? 'text' : 'password'} name={'password'} className={'form-control'} placeholder={'New Password'} />
                        </div>
                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input type={passwordToggle ? 'text' : 'password'} name={'confirm_password'} className={'form-control'} placeholder={'Confirm Password'} />
                        </div>

                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="showHidePassword" value={passwordToggle} onChange={() => setPasswordToggle(!passwordToggle)} />
                            <label className="form-check-label" for="showHidePassword">
                                Show Password
                            </label>
                        </div>

                        <button className="btn btn-warning rounded-0 float-end">Save</button>
                    </form>
                </div>
            </div>
        )
    }

    const SettingContent = () => {
        switch (settingChange) {
            case 'Profile Information' :
                return ProfileInformation()
                break
            case 'Account' :
                return Account()
                break
            case 'Security' :
                return Security()
                break
        }
    }

    return (
        <>
            <Helmet>
                <title>User Setting</title>
            </Helmet>
            
            {/* Breadcrumb */}
            <div className="bg-white pt-3 pb-3 container-fluid">
                <div className="clearfix">
                    <div className="float-start">
                        <b>User Setting</b>
                    </div>

                    <div className="float-end hstack gap-3">
                        <Link to={'/admin'} className="text-decoration-none">Home</Link>
                        <div className="vr"></div>
                        <span>User Setting</span>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mx-auto justify-content-center">
                    <div className="card col-sm-4 m-3 border-0 border-start border-5 border-success align-self-start">
                        <div className="card-body vstack">
                            <button className="btn btn-light mb-3" onClick={() => setSettingChange("Profile Information")}>
                                Profile Information
                            </button>
                            <button className="btn btn-light mb-3" onClick={() => setSettingChange("Account")}>
                                Account
                            </button>
                            <button className="btn btn-light" onClick={() => setSettingChange("Security")}>
                                Security
                            </button>
                        </div>
                    </div>

                    { SettingContent() }
                </div>
            </div>
        </>
    )
}

export default Setting;