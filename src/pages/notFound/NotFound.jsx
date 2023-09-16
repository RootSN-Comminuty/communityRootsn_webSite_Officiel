import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    return (
        <section>
            <div className='container notfound__container'>
                <h2>Page Non Trouvée</h2>
                <Link to="/" className='btn'>Retour vers la page d'Accueil</Link>
            </div>
        </section>
    )
}

export default NotFound