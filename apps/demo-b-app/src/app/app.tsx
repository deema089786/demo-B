import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { SignupController } from '@demo-b/feat-signup';
import { NotificationsController } from '@demo-b/feat-notifications';
import { HomeCustomerController } from '@demo-b/feat-home-customer';
import { HomeDriverController } from '@demo-b/feat-home-driver';
import { SettingsController } from '@demo-b/feat-settings';

const router = createBrowserRouter([
  {
    path: '/customer',
    element: <HomeCustomerController />,
  },
  {
    path: '/driver',
    element: <HomeDriverController />,
  },
  {
    path: '/notifications',
    element: <NotificationsController />,
  },
  {
    path: '/settings',
    element: <SettingsController />,
  },
  {
    path: '/signup',
    element: <SignupController />,
  },
  // Native app can not have unknown routes
  { path: '*', element: <Navigate to="/customer" replace /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
