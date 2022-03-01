import AboutTournament from "../../Components/AboutTournament/AboutTournament";
import Banner from "../../Components/Banner/Banner";
import StatusBar from "../../Components/StatusBar/StatusBar";
import {useEffect, useState} from "react"
import axios from 'axios';
import Bracket from '../../Components/MatchesRoutes/Bracket';


const Tournaments = () => {

    const [state, setState] = useState(null)
    
    useEffect(() => {    
        if(state == null){
            axios.get("http://localhost:8080/tournaments/details")
            .then(res => {
                setState(res.data)
            })   
        }
    });

    return (
        <div>
            { state == null ? (
                <>
                    Carregando
                </>
            ) : (
                <>
                    <Banner title={state.tournament.name} />
                    <StatusBar 
                        players={state.players} 
                        date={state.tournament.start_date} 
                        prize={state.tournament.prize_pool} 
                        format={state.tournament.format}
                    />
                    <AboutTournament description={state.tournament.description}/>
                    <Bracket bracket={state.bracket}/>
                </>
            )}
        </div>
        
    )
};

export default Tournaments;