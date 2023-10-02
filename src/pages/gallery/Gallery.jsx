/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
    const galleryLenght = 6;
    const images = [];

    for (let i = 1; i <= galleryLenght; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }

    return (
        <>
            <Header title="Galerie" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A aliquid earum labore ut doloribus quae nam sit, nemo autem! Odit!
            </Header>

            <section className='gallery'>
                <div className='container gallery__container'>
                    {
                        images.map((image, index) => {
                            return <article key={index}>
                                <img src={image} alt={`Gallery Image ${index + 1}`} />
                            </article>
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default Gallery