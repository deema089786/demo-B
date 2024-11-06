import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignupScreenController, NotFoundScreenController } from './screens';

const router = createBrowserRouter([
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
