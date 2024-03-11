
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store } from './stores/store';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
