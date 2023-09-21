import MainHeader from '../../components/MainHeader'
import Desc from '../../components/Desc'
import Desc2 from '../../components/Desc2'
import Programs from '../../components/Programs'
import Activities from '../../components/Activities'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Join from '../../components/Join'


import './home.css'
const Home = () => {
    return (
        <>
            <MainHeader />
            <Desc />
            <Programs />
            <Desc2 />
            <Activities />
            <FAQs />
            <Join />
            <Testimonials />
        </>
    )
}

export default Home