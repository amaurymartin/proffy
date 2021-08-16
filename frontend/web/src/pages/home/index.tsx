import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/images/logo.svg'
import homeImg from '../../assets/images/home.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import teachIcon from '../../assets/images/icons/teach.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Home = (): JSX.Element => {
  const [connections, setConnections] = useState(0)

  useEffect(() => {
    const acceptedClassStatus = 1

    api
      .get('classes', { params: { status: acceptedClassStatus } })
      .then((response) => {
        setConnections(response.headers['x-total-count'] || 0)
      })
  }, [])
  return (
    <div id="home">
      <div id="home-content" className="home-container">
        <div className="logo">
          <img src={logoImg} alt="Proffy" />
          <h2>Your online study platform</h2>
        </div>

        <img src={homeImg} alt="Study plataform" className="home-image" />

        <div className="buttons-container">
          <Link to="/educators" className="study">
            <img src={studyIcon} alt="Study" />
            Study
          </Link>
          <Link to="/educators/new" className="teach">
            <img src={teachIcon} alt="Teach" />
            Teach
          </Link>
        </div>

        <span className="stats">
          {`More than ${connections} people connected`}
          <img src={purpleHeartIcon} alt="Purple heart" />
        </span>
      </div>
    </div>
  )
}

export default Home
