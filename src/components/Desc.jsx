/* eslint-disable jsx-a11y/img-redundant-alt */
import DescImage from "../images/1.jpg";


const Desc = () => {
    return (
        <section className="desc">
            <div className="container desc-container">
                <div className="desc-image">
                    <img src={DescImage} alt="Desc Image" />
                </div>
                <div className="desc-content">
                    <h1><span>Une Communauté</span> pour tout le monde</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero rerum assumenda aliquam, exercitationem necessitatibus optio eos ab perferendis.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Desc