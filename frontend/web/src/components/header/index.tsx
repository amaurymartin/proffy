import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

type HeaderProps = {
  text: string
  children?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ text, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Go back" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{text}</strong>

        {children}
      </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Header
