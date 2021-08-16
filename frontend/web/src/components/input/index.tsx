import { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ name, label, type, placeholder }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label}
        <input type={type} name={name} id={name} placeholder={placeholder} />
      </label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
}

export default Input
