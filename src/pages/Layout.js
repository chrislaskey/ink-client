import React from 'react'
import { Route, Link } from 'react-router-dom'

import './Layout.css'

import About from './About/Index'
import Home from './Home/Index'
import Posts from './Posts/Index'

const Layout = () => (
  <div className='Layout'>
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About</Link>
      <Link to='/posts'>Posts</Link>
    </header>
    <div>
      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-us' component={About} />
        <Route exact path='/posts' component={Posts} />
      </main>
    </div>
  </div>
)

export default Layout
