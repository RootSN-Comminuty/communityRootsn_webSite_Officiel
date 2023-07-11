import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Ministers from './pages/ministers/Ministers'
import Blocs from './pages/blocs/Blocs'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='gallery' element={<Gallery />}></Route>
                <Route path='blocs' element={<Blocs />}></Route>
                <Route path='ministers' element={<Ministers />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App