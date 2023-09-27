/* eslint-disable jsx-a11y/img-redundant-alt */
import Image from '../images/Fingerprint-cuate.png'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
//import { AiFillCaretRight } from 'react-icons/ai'
import { activities } from '../data'
import Card from '../UI/Card'

const Activities = () => {
    return (
        <section className="activities">
            <div className="container activities__container">
                <div className="activities__left">
                    <div className="activities__image">
                        <img src={Image} alt="activities Image" />
                    </div>
                </div>
                <div className="activities__right">
                    <SectionHead icon={<GiCutDiamond />} title="Nos Activités" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ea. Quaerat minus placeat dolore ducimus</p>
                    <div className="activities__wrapper">
                        {
                            activities.map(({ id, icon, title, desc }) => {
                                return <Card key={id} className="activities__activity">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities