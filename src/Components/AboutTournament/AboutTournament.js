import './AboutTournament.css'
import { useState } from 'react';
import AllMatches from '../MatchesRoutes/AllMatches';
import Bracket from '../MatchesRoutes/Bracket';
import Upcoming from '../MatchesRoutes/Upcoming';
import Finished from '../MatchesRoutes/Finished';


const AboutTournament = () => {
    
    const [state, setState] = useState(<AllMatches/>);


    const matchesRouter = (state) => {
        if(state === 'allmatches') {
            setState(<AllMatches/>)
        } else if (state === 'upcoming') {
            setState(<Upcoming/>)
        } else if (state === 'bracket'){
            setState(<Bracket/>)
        } else if( state === 'finished') {
            setState(<Finished/>)  
        } else {
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
                   
                    <button className='btn-about' onClick={() => matchesRouter('allmatches')}>ALL MATCHES</button>                 
                    <button  className='btn-about'onClick={() => matchesRouter('bracket')}>BRACKET</button>                    
                    <button className='btn-about' onClick={() => matchesRouter('upcoming')}>UPCOMING</button>                    
                    <button className='button type1' onClick={() => matchesRouter('finished')}>FINISHED</button>
                    {state}
                </nav>
            </div>
        </div>
    )
}

export default AboutTournament;