const BracketMatch = ({date, team1, team2, key}) => {
    return (
        <li className="tournament-bracket__item" key={key}>
            <div className="tournament-bracket__match" tabindex="0">
                <table className="tournament-bracket__table">
                <caption className="tournament-bracket__caption">
                    <time datetime="1998-02-18">{date}</time>
                </caption>
                <thead className="sr-only">
                    <tr>
                    <th>Country</th>
                    <th>Score</th>
                    </tr>
                </thead>  
                <tbody className="tournament-bracket__content">
                    <tr className="tournament-bracket__team tournament-bracket__team--winner">
                    <td className="tournament-bracket__country">
                        <abbr className="tournament-bracket__code" title="Canada">{team1.name}</abbr>
                        <span className="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
                    </td>
                    <td className="tournament-bracket__score">
                        <span className="tournament-bracket__number">{team1.score}</span>
                    </td>
                    </tr>
                    <tr className="tournament-bracket__team">
                    <td className="tournament-bracket__country">
                        <abbr className="tournament-bracket__code" title="Kazakhstan">{team2.name}</abbr>
                        <span className="tournament-bracket__flag flag-icon flag-icon-kz" aria-label="Flag"></span>
                    </td>
                    <td className="tournament-bracket__score">
                        <span className="tournament-bracket__number">{team2.score}</span>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </li>
    )
}

export default BracketMatch;