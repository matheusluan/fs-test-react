
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store } from './stores/store';

import { Home } from './pages/home';
import { Play } from './pages/play';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
