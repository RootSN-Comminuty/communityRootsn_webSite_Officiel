/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import Evens1Image from "../../images/rm373batch4-15.jpg";
import Evens2Image from "../../images/rm373batch4-15.jpg";

//import SectionHead from "../../components/SectionHead"
//import { MdOutlineSecurity } from 'react-icons/md'

import Programs from '../../components/Programs'

import './evenements.css'

const Evenements = () => {
    return (
        <>
            <Header title="Evenements" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A aliquid earum labore ut doloribus quae nam sit, nemo autem! Odit!
            </Header>

            {/* <section className="evens">
                <div className='section__header'>
                    <SectionHead icon={<MdOutlineSecurity />} title="Notre Evenement Phare" />
                </div>
                <div className="container evens-container">
                    <div className="evens-image-right">
                        <img src={EvensImage} alt="Evens Image" />
                    </div>
                    <div className="evens-left">
                        <h1 class="title">Octobre Cyber by #rootSNCommunity
                            <div class="aurora">
                                <div class="aurora__item"></div>
                                <div class="aurora__item"></div>
                                <div class="aurora__item"></div>
                                <div class="aurora__item"></div>
                            </div>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Deserunt, temporibus. Recusandae accusantium voluptatem perspiciatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Deserunt, temporibus. Recusandae accusantium voluptatem perspiciatis.
                        </p>
                        <Link to="/about" className="btn lg">Suivre L'evenement</Link>
                    </div>

                </div>
            </section> */}
            <section className="evens1">
                <div className="container evens1-container">
                    <div className="evens1-image">
                        <img src={Evens1Image} alt="Evens1 Image" />
                    </div>
                    <div className="evens1-content">
                        <h1><span>Octobre Cyber</span> by #rootSNCommunity</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/about" className="btn lg">Suivre l'Evenement</Link>
                    </div>
                </div>
            </section>

            <Programs />

            <section className="evens2">
                <div className="container evens2-container">

                    <div className="evens2-content">
                        <h1><span>OCBRSN2023</span> Octobre Cyber</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Link to="/about" className="btn lg">Suivre l'Evenement</Link>
                    </div>
                    <div className="evens2-image">
                        <img src={Evens2Image} alt="Evens2 Image" />
                    </div>

                </div>
            </section>

        </>
    )
}

export default Evenements