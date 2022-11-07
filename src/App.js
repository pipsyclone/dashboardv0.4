import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom"

import Preloader from "./admin/components/preloader";

// import Admin from "./admin/admin";
import Dashboard from './admin/content/dashboard'
import AuthPages from './admin/content/authPages'
import Setting from './admin/content/setting'

import Error404 from './error-page/404'

const App = () => {

  const Admin = React.lazy(() => import('./admin/admin'))

  const AdminPage = (content) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Admin content={content} />
      </Suspense>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Link className="btn btn-primary btn-index" to={'/admin'}>Go Dashboard</Link>} />
        <Route path="/admin" element={AdminPage(<Dashboard />)} />
        <Route path="/admin/auth-pages" element={ AdminPage(<AuthPages />) } />
        <Route path="/admin/setting" element={ AdminPage(<Setting />) } />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App;