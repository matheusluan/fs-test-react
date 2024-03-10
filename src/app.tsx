
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Play } from './pages/play';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
}
