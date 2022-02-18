import './AboutTournament.css'
import { Link } from 'react-router-dom';

const AboutTournament = () => {

    return (
        <div className='about-box'>
            <div  >
                <h1 className='h1-box'>ABOUT THE TOURNAMENT</h1>
            </div>
            <div>
                <p style={{marginLeft: '8px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <div className='nav-box'>
                <nav >
                    <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments/allmatches'>
                        <button>ALL MATCHES</button>
                    </Link>
                    <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments/bracket'>
                        <button>BRACKET</button>
                    </Link>
                    <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments/upcoming'>
                        <button>UPCOMING</button>
                    </Link>
                    <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments/finished'>
                        <button>FINISHED</button>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default AboutTournament;