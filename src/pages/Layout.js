import React from 'react'
import { Route, Link } from 'react-router-dom'

import './Layout.css'

import About from './About/Index'
import Home from './Home/Index'
import Posts from './Posts/Index' // TODO: fix lower casing
import Session from './Session'

const Layout = () => (
  <div className='Layout'>
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/session/login'>Login</Link>
    </header>
    <div>
      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-us' component={About} />
        <Route path='/posts' component={Posts} />
        <Route path='/session' component={Session} />
      </main>
    </div>
  </div>
)

export default Layout
