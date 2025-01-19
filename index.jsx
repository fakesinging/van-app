import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./vanapp/pages/Home"
import About from "./vanapp/pages/About"
import Vans from "./vanapp/pages/Vans/Vans"
import { VanDetails } from './vanapp/pages/Vans/VanDetails';
import Dashboard from './vanapp/pages/Host/Dashboard';
import Income from './vanapp/pages/Host/Income';
import Reviews from './vanapp/pages/Host/Reviews';
import HostLayout from './vanapp/components/HostLayout';
import HostVans from './vanapp/pages/Host/HostVans';
import HostVanDetails from './vanapp/pages/Host/HostVanDetails';
import Layout from "./vanapp/components/Layout"
import HostVanInfo from './vanapp/pages/Host/HostVanInfo';
import HostVanPricing from './vanapp/pages/Host/HostVanPricing';
import HostVanPhotos from './vanapp/pages/Host/HostVanPhotos';


import "./vanapp/server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} >
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);