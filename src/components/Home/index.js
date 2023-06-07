// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {isLoading: true, iplTeamsList: []}

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)

    const responseData = await response.json()

    const teamsData = [...responseData.teams]
    const formattedData = teamsData.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({isLoading: false, iplTeamsList: formattedData})
  }

  homeView = () => {
    const {iplTeamsList} = this.state

    return (
      <div className="ipl-teams-list-container">
        <div className="ipl-dash-board-title-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-dashboard-logo"
          />
          <h1 className="ipl-log-heading">IPL Dashboard</h1>
        </div>
        <ul className="ipl-team-list-container">
          {iplTeamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="ipl-teams-list-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.homeView()
        )}
      </div>
    )
  }
}

export default Home
