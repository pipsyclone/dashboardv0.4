import React, { Suspense } from 'react';

// Components
import Preloader from './dashboard/components/preloader'

const App = () => {

  const IndexDB   = React.lazy(() => import('./dashboard/indexDB'))
  const IndexUI   = React.lazy(() => import('./public_ui/indexUI'))
  const ErrorPage = React.lazy(() => import('./error-page/errorPage'))

  const url = window.location.pathname;

  switch (url) {
    case '/' :
      return (
        <Suspense fallback={<Preloader />}>
          <IndexUI />
        </Suspense>
      )
      break;

    case '/dashboardv0.4' :
      return (
        <Suspense fallback={<Preloader />}>
          <IndexDB />
        </Suspense>
      )
      break;
    
    default :
      return (
        <Suspense fallback={<Preloader />}>
          <ErrorPage />
        </Suspense>
      )
  }
}

export default App;
