import SectionHead from "./SectionHead"
import { ImQuotesLeft } from "react-icons/im"
import Image from '../images/main_header.png'

const Partners = () => {
    return (
        <div className="partner-carousel">
            <SectionHead icon={<ImQuotesLeft />} title="Nos Patenaires" className="testimonials__head" />
            <div className="partner-carousel-inner">
                <img className="partner-logo" src={Image} alt="Partner Logo 1" />
                <img
                    className="partner-logo"
                    src={Image}
                    alt="Partner Logo 2"
                />
                <img
                    className="partner-logo"
                    src={Image}
                    alt="Partner Logo 3"
                />
                <img
                    className="partner-logo"
                    src={Image}
                    alt="Partner Logo 4"
                />
                <img
                    className="partner-logo"
                    src={Image}
                    alt="Partner Logo 5"
                />
                <img
                    className="partner-logo"
                    src={Image}
                    alt="Partner Logo 6"
                />
            </div>
        </div>
    )
}

export default Partners