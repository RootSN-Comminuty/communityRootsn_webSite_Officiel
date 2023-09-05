/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
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
                        <h1>Our Story</h1>
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
                        <h1>Our Vision</h1>
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
                        <h1>Our Mission</h1>
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

        </>
    )
}

export default About