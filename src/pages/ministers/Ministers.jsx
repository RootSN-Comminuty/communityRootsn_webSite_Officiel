import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.png'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Minister from '../../components/Minister'
import './ministers.css'

const Ministers = () => {
    return (
        <>
            <Header title="Ministres" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                A aliquid earum labore ut doloribus quae nam sit, nemo autem! Odit!
            </Header>
            <section className='trainers'>
                <div className='container trainers__container'>
                    {
                        trainers.map(({ id, image, name, job, socials }) => {
                            return <Minister key={id} image={image} name={name} job={job} socials={
                                [
                                    { icon: <BsInstagram />, link: socials[0] },
                                    { icon: <AiOutlineTwitter />, link: socials[1] },
                                    { icon: <FaFacebookF />, link: socials[2] },
                                    { icon: <FaLinkedinIn />, link: socials[3] }
                                ]
                            } />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Ministers