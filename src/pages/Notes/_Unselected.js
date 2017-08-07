import React from 'react'
import { Heading, Section } from '../../components/Section'

export const UnselectedNote = () => {
  const heading = (
    <Heading>
      <div className='note-actions' />
    </Heading>
  )

  return (
    <Section id='unselected-note' heading={heading}>
      <div className='full-height center-children'>
        <span className='unselected-note-message'>
          Select A Note To Read
        </span>
      </div>
    </Section>
  )
}

export default UnselectedNote
