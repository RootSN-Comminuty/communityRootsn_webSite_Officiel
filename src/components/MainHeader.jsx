/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#rootSN-Community</h4>
                    <h1 class="title">#rootSN c'est moi mais aussi c'est vous !
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
                    <Link to="/about" className="btn lg">Savoir Plus</Link>
                </div>
                <div className='main__header-right'>
                    <div className='main__header-circle'></div>
                    <div className='main__header-image'>
                        <img src={Image} alt="Main Header Image" />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default MainHeader