import React from 'react'

const Page = ({ children, loading }) => (
  <div id='page'>
    {loading && <p>Loading</p>}
    {children}
  </div>
)

export default Page
