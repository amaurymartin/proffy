import { ChangeEvent, TextareaHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  onChange: (event: ChangeEvent<HTMLElement>) => void
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, onChange }) => {
  return (
    <div className="text-area-block">
      <label htmlFor={name}>
        {label}
        <textarea name={name} onChange={onChange} />
      </label>
    </div>
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TextArea
