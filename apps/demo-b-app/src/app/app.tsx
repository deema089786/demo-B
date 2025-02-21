import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeScreenCustomer } from '@demo-b/demo-b-design-system';

import { SignupScreenController, NotFoundScreenController } from './screens';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreenCustomer />,
  },
  {
    path: '/signup',
    element: <SignupScreenController />,
  },
  { path: '*', element: <NotFoundScreenController /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
