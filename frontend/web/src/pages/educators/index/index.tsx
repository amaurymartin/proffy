import { Link } from 'react-router-dom'

import logoImg from '../../../assets/images/logo.svg'
import backIcon from '../../../assets/images/icons/back.svg'

import './styles.css'

const EducatorsIndex = (): JSX.Element => {
  return (
    <div id="educators-index" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Go back" />
          </Link>

          <img src={logoImg} alt="Proffy" />
        </div>

        <div className="header-content">
          <strong>These are the available educators</strong>
        </div>
      </header>
    </div>
  )
}

export default EducatorsIndex
