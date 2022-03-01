import BracketMatch from "./BracketMatch";

const BracketRounds = ({round, matches}) => {
    return (
        <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
        <h3 className="tournament-bracket__round-title">{round}</h3>
        <ul className="tournament-bracket__list">
            {
                (function (matches) {
                    let rows = []
                    for(var i = 0; i < matches.length; i++){
                        rows.push(
                            <BracketMatch key={i} date="Minha data" team1={{name:matches[i]["Team1Id"], score: matches[i]["Score1"]}}  team2={{name:matches[i]["Team2Id"], score:matches[i]["Score2"]}} />
                        );
                    }
                    return rows;
                  })(matches) 
            }
        </ul>
        </div>
    )
}

export default BracketRounds;