/* eslint-disable jsx-a11y/img-redundant-alt */
import Desc2Image from "../images/rm373batch4-15.jpg";

const Desc2 = () => {
    return (
        <section className="desc2">
            <div className="container desc2-container">

                <div className="desc2-content">
                    <h1><span>La Cybersecurité</span> une affaire pour tous</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis.
                    </p>
                </div>
                <div className="desc2-image">
                    <img src={Desc2Image} alt="desc2 Image" />
                </div>

            </div>
        </section>
    )
}

export default Desc2