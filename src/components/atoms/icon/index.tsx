import * as React from 'react'

export interface IconProps {
  name: string
  color?: 'info' | 'success' | 'warning' | 'danger'
}

const Icon: React.FC<IconProps> = ({ name, color }) => {
  const hasTextColor = color ? `has-text-${color}` : '' 
  return (
    <span className={`icon ${hasTextColor}`}>
      <i className={`fas ${name}`}></i>
    </span>
  )
}

export default Icon
