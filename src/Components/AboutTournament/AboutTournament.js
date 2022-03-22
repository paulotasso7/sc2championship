import './AboutTournament.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AllMatches from '../MatchesRoutes/AllMatches';
import Bracket from '../MatchesRoutes/Bracket';
import Upcoming from '../MatchesRoutes/Upcoming';
import Finished from '../MatchesRoutes/Finished';


const AboutTournament = () => {
    
    const [state, setState] = useState(<AllMatches/>);

    // const toBracket = ( ) => {
    //     setState(<Bracket/>)
    // }

    // const toAllMatches = ( ) => {
    //     console.log('ssdf')
    //     setState(<AllMatches/>)
    // }

    // const toUpcoming = ( ) => {
    //     setState(<Upcoming/>)
    // }

    // const toFinished = ( ) => {
    //     setState(<Finished/>)
    // }

    const switchFun = (state) => {
        switch (state) {
            case 'allmatches':
                setState(<AllMatches/>)
                break;
            case 'upcoming':
                setState(<Upcoming/>)
                break;
            case 'bracket' :
                setState(<Bracket/>)
                break;
            case 'finished' :
                setState(<Finished/>)    
                break;
            default:
                setState()
        }
    } 

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
                    {/* <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments'> */}
                        <button className='btn-about' onClick={() => switchFun('allmatches')}>ALL MATCHES</button>
                    {/* </Link> */}
                    {/* <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments' > */}
                        <button  className='btn-about'onClick={() => switchFun('bracket')}>BRACKET</button>
                    {/* </Link> */}
                    {/* <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments'> */}
                        <button className='btn-about' onClick={() => switchFun('upcoming')}>UPCOMING</button>
                    {/* </Link>
                    <Link className='ff-bebas  fweigth fsize tx-dec' to='/tournaments'
                    > */}
                        <button className='button type1' onClick={() => switchFun('finished')}>FINISHED</button>
                    {/* </Link> */}
                    {state}
                </nav>
            </div>
        </div>
    )
}

export default AboutTournament;