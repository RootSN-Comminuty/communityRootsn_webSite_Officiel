/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import StoryImage from "../../images/Secure data-bro.png"
import VisionImage from "../../images/Hacker-cuate.png"
import MissionImage from "../../images/Secure Server-amico.png"
import { Link } from "react-router-dom";
import './about.css'

const About = () => {
    return (
        <>
            <Header title="A Propos" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A aliquid earum labore ut doloribus quae nam sit, nemo autem! Odit!
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Our Story Image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Qui sommes-nous</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis
                            reprehenderit porro qui, dignissimos
                            consectetur error accusamus, deserunt animi minus hic itaque.
                        </p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis
                            reprehenderit porro qui, dignissimos
                            consectetur error accusamus, deserunt animi minus hic itaque.
                        </p>
                    </div>

                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Nos valeurs</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus culpa architecto vitae veniam earum doloribus
                            exercitationem consequatur, corrupti, quas necessitatibus quisquam illo repellendus. Nobis veniam aspernatur minus,
                            eaque a doloribus excepturi distinctio voluptates dolorem voluptatem! Omnis, magnam. Iusto, deserunt quos.
                        </p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Iusto enim fugit adipisci assumenda molestias ad dolor omnis deleniti blanditiis commodi!
                        </p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Our Vision Image" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our Mission Image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Nos Missions</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis
                            reprehenderit porro qui, dignissimos
                            consectetur error accusamus, deserunt animi minus hic itaque.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis
                            reprehenderit porro qui, dignissimos.
                        </p>
                    </div>

                </div>
            </section>

            <section className='joinabout'>
                <div className='container joinabout__container'>
                    <h2>Devenez membre de la <span>Communinauté</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel incidunt similique molestiae provident rerum voluptate modi ad ratione
                        maxime sapiente fuga excepturi dolorum cumque quamvoluptate assumenda
                        fugiat minima. Alias aut facere quo quasi. Itaque et voluptatem excepturi molestias.</p>
                    <Link to="/" className='btn'>Rejoignez-nous</Link>
                </div>
            </section>
        </>
    )
}

export default About