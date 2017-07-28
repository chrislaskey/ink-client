import React from 'react'
import { Heading, Section } from '../../components/Section'
import Logout from '../User/_Logout'

const AllSettings = () => (
  <Section padded heading={<Heading><h3>Settings</h3></Heading>}>
    <h1>Account Settings</h1>
    <Logout />
  </Section>
)

export default AllSettings
