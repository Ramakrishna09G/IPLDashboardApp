// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    matchStatus,
    result,
    umpires,
    venue,
  } = latestMatchDetails
  console.log(latestMatchDetails)

  return (
    <div className="latest-match-card-container">
      <div className="venue-card-container">
        <div className="venue-card">
          <p className="competing-team vc-item-1 vc-item-team-name">
            {competingTeam}
          </p>
          <p className="date vc-item-1 vc-item-venue">{date}</p>
          <p className="venue vc-item-2">{venue}</p>
          <p className="result vc-item-2">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="innings-details-container">
        <h1 className="frist-innings-heading column-name">Frist Innings</h1>
        <p className="first-innings column-value">{firstInnings}</p>
        <h1 className="second-innings-heading column-name">Second Innings</h1>
        <p className="second-innings column-value">{secondInnings}</p>
        <h1 className="man-of-the-match-heading column-name">
          Man Of The Match
        </h1>
        <p className="man-of-the-match column-value">{manOfTheMatch}</p>
        <h1 className="umpires-heading column-name">umpires</h1>
        <p className="umpires column-value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
