import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#RootSN-Community</h4>
                    <h1>#rootSN c'est moi mais aussi c'est vous !</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
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