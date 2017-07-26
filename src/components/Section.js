import React from 'react'

export const Section = ({ children, heading, id, width }) => (
  <div
    id={id}
    className='content-column window-height'
    style={{ width: width || '100%' }}
  >
    <div className='column-heading'>
      { heading }
    </div>
    <div className='scroll-container'>
      { children }
    </div>
  </div>
)

export const Heading = ({ children }) => (
  <div className='section-heading'>
    {children}
  </div>
)

Section.Heading = Heading

export default Section
