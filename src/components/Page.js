import React from 'react'
import { Heading, Section } from '../components/Section'

const Page = ({ children, loading }) => {
  const spinner = <Section loading heading={<Heading />} />

  return (
    <div id='page'>
      {loading ? spinner : children}
    </div>
  )
}

export default Page
