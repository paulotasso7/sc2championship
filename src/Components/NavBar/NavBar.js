import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (  
        <nav className="bgc-purple dp-flex  jc-sb pad ai-center" >
            <div className='dp-flex ai-center jc-center' >               
                <Link className='ff-bebas  fweigth fsize tx-dec' to='/'>
                    <img className='maxH-2em' src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/logo-standard-OVERWORLD.png' alt='logo'/>
                </Link>
            </div>
            <div className='tx-dec' >
                <div className='dp-flex'>
                    <div >
                        <Link  to="/">
                            <button className='marg-left color-white letter-space ' >HOME</button>
                        </Link>
                    </div>
                    <div>
                        <Link  to="/rank">
                            <button className='marg-left color-white letter-space' >RANK</button>
                        </Link>
                    </div>
                    <div>
                        <Link  to="/tournaments">
                            <button className='marg-left color-white letter-space' >TOURNAMENTS</button>
                        </Link>
                    </div>
                    <div>
                        <Link  to="/login">
                            <button className='marg-left color-white letter-space' >LOGIN</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;