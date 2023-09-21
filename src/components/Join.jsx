import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <section className='join'>
            <div className='container join__container'>
                <h2>#rootSN<span>Community</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel incidunt similique molestiae provident rerum voluptate modi ad ratione
                    maxime sapiente fuga excepturi dolorum cumque quam tenetur, facilis doloribus
                    temporibus neque distinctio explicabo aperiam culpa! Facilis voluptate assumenda
                    fugiat minima. Alias aut facere quo quasi. Itaque et voluptatem excepturi molestias.</p>
                <Link to="/" className='btn'>Rejoignez-nous</Link>
            </div>
        </section>
    )
}

export default Join