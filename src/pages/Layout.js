import React from 'react'
import { Route, Link } from 'react-router-dom'

import './Layout.css'

import About from './About/Index'
import Home from './Home/Index'
import Posts from './Posts'
import Session from './Session'

import Logout from './Session/_Logout'

const Layout = () => (
  <div className='Layout'>
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/session/login'>Login</Link>
      <Logout />
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
