import PropTypes from 'prop-types'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import api from '../../services/api'

import './styles.css'

type EducatorProps = {
  educator: {
    key: string
    avatar: string
    name: string
    bio: string
    email: string
    whatsapp: string
  }
  klassKey: string
  klassSubject: string
  klassPrice: number
}

const Educator: React.FC<EducatorProps> = ({
  educator,
  klassKey,
  klassSubject,
  klassPrice,
}) => {
  async function scheduleClass() {
    // TODO: Should this const be an env?
    const acceptedClassStatus = 1

    const payload = {
      klass: {
        key: 'status',
        value: acceptedClassStatus,
      },
    }

    await api
      .patch(`classes/${klassKey}`, payload)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Class schedule successfully')
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on scheduling the class. Try again later')
      })
  }

  return (
    <article className="educator">
      <header>
        <img src={educator.avatar} alt={educator.avatar} />
        <div>
          <strong>{educator.name}</strong>
          <span>{klassSubject}</span>
        </div>
      </header>

      <p>{educator.bio}</p>

      <footer>
        <p>
          Per hour
          <strong>USD {klassPrice}</strong>
        </p>
        <a
          href={`https://wa.me/55${educator.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={scheduleClass}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Contact
        </a>
      </footer>
    </article>
  )
}

Educator.propTypes = {
  educator: PropTypes.shape({
    key: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
  }).isRequired,
  klassKey: PropTypes.string.isRequired,
  klassSubject: PropTypes.string.isRequired,
  klassPrice: PropTypes.number.isRequired,
}

export default Educator
