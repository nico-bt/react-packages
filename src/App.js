import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header"
import Charts from './pages/Charts';
import Count from './pages/Count';
import Home from './pages/Home';
import Icons from './pages/Icons';
import ModalComp from './pages/ModalComp';
import Spinner from './pages/Spinner';
import Toastify from './pages/Toastify';
import Tooltip from './pages/Tooltip';
import VideoPlayer from './pages/VideoPlayer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/toastify" element={<Toastify />} />
        <Route path="/modal" element={<ModalComp />} />
        <Route path="/tooltip" element={<Tooltip />} />
        <Route path="/count" element={<Count />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App