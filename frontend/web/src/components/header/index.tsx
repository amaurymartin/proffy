import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

type HeaderProps = {
  title: string
  subtitle?: string
  children?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Go back" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {subtitle !== '' && <p>{subtitle}</p>}

        {children}
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  subtitle: '',
}

export default Header
