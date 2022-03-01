import './AboutTournament.css';
import { useState } from 'react';
import AllMatches from '../MatchesRoutes/AllMatches';
import Bracket from '../MatchesRoutes/Bracket';
import Upcoming from '../MatchesRoutes/Upcoming';
import Finished from '../MatchesRoutes/Finished';


const AboutTournament = ({description}) => {
    
    const [state, setState] = useState(<AllMatches/>);


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
                <p style={{marginLeft: '8px'}} dangerouslySetInnerHTML={{__html: description}}>
                </p>
            </div>
            <div className='nav-box'>
                <nav >
                
                        <button className='btn-about' onClick={() => switchFun('allmatches')}>ALL MATCHES</button>
                                 
                        <button  className='btn-about'onClick={() => switchFun('bracket')}>BRACKET</button>
                 
                        <button className='btn-about' onClick={() => switchFun('upcoming')}>UPCOMING</button>
                    
                        <button className='button type1' onClick={() => switchFun('finished')}>FINISHED</button>
                   
                    {state}
                </nav>
            </div>
        </div>
    )
}

export default AboutTournament;