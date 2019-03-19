import * as React from 'react'

export interface IconProps {
  name: string
  color?: 'info' | 'success' | 'warning' | 'danger'
  isFileIcon?: boolean
}

const Icon: React.FC<IconProps> = ({ name, color, isFileIcon }) => {
  const hasTextColor = color ? `has-text-${color}` : ''
  const iconType = isFileIcon ? 'file-icon' : 'icon'
  return (
    <span className={`${iconType} ${hasTextColor}`}>
      <i className={`fas ${name}`}></i>
    </span>
  )
}

export default Icon
