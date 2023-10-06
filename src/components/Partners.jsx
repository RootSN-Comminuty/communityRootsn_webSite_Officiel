import SectionHead from "./SectionHead"
import { FaHandshake } from "react-icons/fa"
import PatnerImage1 from "../images/partners_artefakt.jpg";
import PatnerImage2 from "../images/partners_il4life.png";
import PatnerImage3 from "../images/partners_lmn.png";
import PatnerImage4 from "../images/partners_xarala.png";
import PatnerImage5 from "../images/partners_lxbi.jpg";
import PatnerImage6 from "../images/partners_IT.png";

const Partners = () => {
    return (
        <section className="partners">
            <SectionHead icon={<FaHandshake />} title="Nos Partenaires" className="partners__head" />
            <div className="partners__wrapper">
                <ul>
                    <li>
                        <img src={PatnerImage1} alt="Logo 1" />
                    </li>
                    <li>
                        <img src={PatnerImage2} alt="Logo 2" />
                    </li>
                    <li>
                        <img src={PatnerImage3} alt="Logo 3" />
                    </li>
                    <li>
                        <img src={PatnerImage4} alt="Logo 4" />
                    </li>
                    <li>
                        <img src={PatnerImage5} alt="Logo 5" />
                    </li>
                    <li>
                        <img src={PatnerImage6} alt="Logo 6" />
                    </li>
                </ul>

            </div>
        </section>

    )
}

export default Partners