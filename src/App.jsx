import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Facilites from './pages/Facilites'
import Rooms from './pages/Rooms'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Layout from './pages/Layout'
import Signup from './pages/Signup'
import Booking from './pages/Booking'
import RoomsList from './components/RoomsList'
import Restaurant from './components/Restaurant'
import FacilitesList from './components/FacilitesList'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/roomslist' element={<RoomsList />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/halls' element={<FacilitesList />} />
            <Route path='/halls' element={<FacilitesList />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/facilites' element={<Facilites />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/booking' element={<Booking />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
