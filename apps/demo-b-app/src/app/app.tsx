import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeScreenCustomer } from '@demo-b/ui-design-system';
import { SignupController } from '@demo-b/feat-signup';

import { NotFoundScreenController } from './screens';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreenCustomer />,
  },
  {
    path: '/signup',
    element: <SignupController />,
  },
  { path: '*', element: <NotFoundScreenController /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
