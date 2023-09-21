import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import ConstructionImage from '../../images/Construction-cuate.png'
import { Link } from 'react-router-dom'
import './blogs.css'

const Blogs = () => {
    return (
        <>
            <Header title="Blogs" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A aliquid earum labore ut doloribus quae nam sit, nemo autem! Odit!
            </Header>

            <section>
                <div className='container blog__container'>
                    <h2>Page En Construction</h2>
                    <img className='blog__image' src={ConstructionImage} alt="Page en Construction" />
                    <Link to="/" className='btn'>Retour vers la page d'Accueil</Link>
                </div>
            </section>
        </>
    )
}

export default Blogs