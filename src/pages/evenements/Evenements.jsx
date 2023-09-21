/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import EvensImage from "../../images/cybersecurite-etablissement.jpg";

import SectionHead from "../../components/SectionHead"
import { MdOutlineSecurity } from 'react-icons/md'
import Desc from '../../components/Desc'
import Desc2 from '../../components/Desc2'
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

            <Desc2 />
            <Programs />
            <Desc />


        </>
    )
}

export default Evenements