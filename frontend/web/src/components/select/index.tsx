import { SelectHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  placeholder?: string
  options: Option[]
}

interface Option {
  value: string
  label: string
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  options,
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
        <select id={name} defaultValue="">
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

Select.defaultProps = {
  placeholder: 'Select',
}

export default Select
