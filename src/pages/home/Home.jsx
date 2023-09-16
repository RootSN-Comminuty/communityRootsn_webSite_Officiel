import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Activities from '../../components/Activities'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
// import Footer from '../../components/Footer'


import './home.css'
const Home = () => {
    return (
        <>
            <MainHeader />
            <Programs />
            <Activities />
            <FAQs />
            <Testimonials />
            {/* <Footer /> */}
        </>
    )
}

export default Home