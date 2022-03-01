
import BracketRounds from "./BracketRounds";
import './Bracket.css';

const Bracket = ({bracket}) => {

    function generateBracket(){
        const rounds = []
        let lastRound = 1
        let roundsMatches = []
        Object.keys(bracket).forEach(key => {
            console.log(bracket[key]["Round"])
            if (bracket[key]["Round"] !== lastRound){
                rounds.push(<BracketRounds matches={roundsMatches} round={lastRound} />)
                roundsMatches = [bracket[key]]
                lastRound = bracket[key]["Round"]

                if (key === Object.keys(bracket).length){
                    rounds.push(<BracketRounds matches={roundsMatches} round={lastRound} />)
                }

            }else{
                roundsMatches.push(bracket[key])
            }
        })
        return rounds
    }
    return (
        <div>
            <div className="container">
                <div className="tournament-bracket tournament-bracket--rounded">                
                        {
                          generateBracket()
                        }
                </div>
            </div>
        </div>
        
        
    )
};

export default Bracket;