/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import Component from './Layout'

describe('Component', () => {
  let props
  let subject

  const render = (passedProps, location = '/') => {
    props = {
      ...passedProps
    }

    const root = document.createElement('div')
    const WrappedComponent = (
      <Router location={location}>
        <Component {...props} />
      </Router>
    )

    subject = ReactDOM.render(WrappedComponent, root)
  }

  beforeEach(() => {
    render()
  })

  it('renders without crashing', () => {
    expect(subject).toBeDefined()
  })
})
