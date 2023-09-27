import { Link } from 'react-router-dom'
import ErrorImage from '../../images/404 Error-amico.png'
import './notFound.css'

const NotFound = () => {
    return (
        <section>
            <div className='container notfound__container'>
                <h2>Page Introuvable</h2>
                <img className='notfound__image' src={ErrorImage} alt="Page en Construction" />
                <Link to="/" className='btn'>Retour vers la page d'Accueil</Link>
            </div>
        </section>
    )
}

export default NotFound