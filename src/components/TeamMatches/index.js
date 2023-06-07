// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch/index'

import MatchCard from '../MatchCard/index'

import './index.css'

const backgroundColorsList = [
  '#1e293b',
  '#a4261d',
  '#5755a7',
  '#d91c1f',
  '#f7db00',
  '#ffffff33',
  '#da237b',
  '#13418b',
  '#f26d22',
  '#4f5db0',
  '#0f172a',
]

class TeamMatches extends Component {
  state = {
    isloading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getLatestMatchesList()
  }

  getLatestMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseData = await response.json()

    const dataInfo = {
      teamBannerUrl: responseData.team_banner_url,
      latestMatchInfo: responseData.latest_match_details,
      recentMatches: responseData.recent_matches,
    }
    const bannerUrl = dataInfo.teamBannerUrl

    const latestMatchInfo = {
      id: dataInfo.latestMatchInfo.id,
      competingTeam: dataInfo.latestMatchInfo.competing_team,
      competingTeamLogo: dataInfo.latestMatchInfo.competing_team_logo,
      date: dataInfo.latestMatchInfo.date,
      firstInnings: dataInfo.latestMatchInfo.first_innings,
      secondInnings: dataInfo.latestMatchInfo.second_innings,
      manOfTheMatch: dataInfo.latestMatchInfo.man_of_the_match,
      matchStatus: dataInfo.latestMatchInfo.match_status,
      result: dataInfo.latestMatchInfo.result,
      umpires: dataInfo.latestMatchInfo.umpires,
      venue: dataInfo.latestMatchInfo.venue,
    }

    const recentMatches = dataInfo.recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      isloading: false,
      teamBannerUrl: bannerUrl,
      latestMatchDetails: latestMatchInfo,
      recentMatchesList: recentMatches,
    })
  }

  renderLatestMatchAndRecentMatchesView = () => {
    const {teamBannerUrl, latestMatchDetails, recentMatchesList} = this.state
    const randomColorOne =
      backgroundColorsList[
        Math.floor(Math.random() * backgroundColorsList.length)
      ]
    console.log(randomColorOne)
    const randomColorTwo =
      backgroundColorsList[
        Math.floor(Math.random() * backgroundColorsList.length)
      ]
    console.log(randomColorTwo)

    return (
      <div
        style={{
          backgroundImage: `linear-gradient(${randomColorOne},${randomColorTwo})`,
        }}
        className="team-matches-container"
      >
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="main-heading">Latest Matches</h1>
        <LatestMatch
          key={latestMatchDetails.id}
          latestMatchDetails={latestMatchDetails}
        />
        <ul className="recent-matches-cards-list-container">
          {recentMatchesList.map(eachMatch => (
            <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isloading} = this.state

    return (
      <div className="team-matches-bg-container">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderLatestMatchAndRecentMatchesView()
        )}
      </div>
    )
  }
}

export default TeamMatches
