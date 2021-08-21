import { ChangeEvent, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLElement>) => void
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  placeholder: '',
}

export default Input
