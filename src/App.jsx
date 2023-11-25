import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { HelmetProvider } from 'react-helmet-async';

import AuthProvider from '../src/Providor/AuthProvidor'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={routes} />
          </AuthProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
