import React from 'react'
import FlashMessages from './FlashMessages'

const Page = ({ children, loading }) => (
  <div id='page'>
    <FlashMessages />
    {loading && <p>Loading</p>}
    {children}
  </div>
)

export default Page
