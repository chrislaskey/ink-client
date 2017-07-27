import React from 'react'
import { Icon } from 'antd'

export const Section = ({ children, heading, id, loading, width }) => {
  const spinner = (
    <div className='full-height center-children'>
      <Icon className='section-loading-icon' type='loading' />
    </div>
  )

  return (
    <div
      id={id}
      className='content-column window-height'
      style={{ width: width || '100%' }}
    >
      <div className='column-heading'>
        { heading }
      </div>
      <div className='scroll-container'>
        { loading ? spinner : children }
      </div>
    </div>
  )
}

export const Heading = ({ children }) => (
  <div className='section-heading'>
    {children}
  </div>
)

Section.Heading = Heading

export default Section
