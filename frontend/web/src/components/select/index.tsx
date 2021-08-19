import { ChangeEvent, SelectHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  placeholder?: string
  options: Option[]
  onChange: (event: ChangeEvent<HTMLElement>, position?: number) => void
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
  onChange,
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
        <select name={name} defaultValue="" onChange={onChange}>
          <option value="" disabled hidden>
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
  onChange: PropTypes.func.isRequired,
}

Select.defaultProps = {
  placeholder: 'Select',
}

export default Select
