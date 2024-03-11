
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



import { Home } from './pages/home';
import { Play } from './pages/play';

const router = createBrowserRouter([
  {
    path: '/',
    element: < Home />
  },
  {
    path: '/play',
    element: < Play />
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
