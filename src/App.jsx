import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { HelmetProvider } from 'react-helmet-async';

import AuthProvider from '../src/Providor/AuthProvidor'

function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </HelmetProvider>
    </>
  )
}

export default App
