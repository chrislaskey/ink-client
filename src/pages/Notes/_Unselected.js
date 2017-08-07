import React from 'react'
import { Heading, Section } from '../../components/Section'

export const UnselectedPost = () => {
  const heading = (
    <Heading>
      <div className='post-actions' />
    </Heading>
  )

  return (
    <Section id='unselected-post' heading={heading}>
      <div className='full-height center-children'>
        <span className='unselected-post-message'>
          Select A Post To Read
        </span>
      </div>
    </Section>
  )
}

export default UnselectedPost
