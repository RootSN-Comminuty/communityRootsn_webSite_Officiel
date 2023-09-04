import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Evenements from './pages/evenements/Evenements'
import Gallery from './pages/gallery/Gallery'
import Ministers from './pages/ministers/Ministers'
import Blocs from './pages/blocs/Blocs'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='evenements' element={<Evenements />} />
                <Route path='blocs' element={<Blocs />} />
                <Route path='ministers' element={<Ministers />} />
                <Route path='galerie' element={<Gallery />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App