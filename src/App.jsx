import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Ministers from './pages/ministers/Ministers'
import Blocs from './pages/blocs/Blocs'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'


const App = () => {
    return (
        <div>
            <Home />
            <About />
            <Gallery />
            <Ministers />
            <Blocs />
            <Contact />
            <NotFound />
        </div>
    )
}

export default App