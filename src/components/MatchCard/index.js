// Write your code here

import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachMatch
  const isWon = matchStatus === 'Won'
  const colorHexCode = isWon ? '#18ed66' : '#e31a1a'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className="match-status" style={{color: `${colorHexCode}`}}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
