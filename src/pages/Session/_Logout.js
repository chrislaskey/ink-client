import React from 'react'
import { connect } from 'react-redux'
import history from '../../app/history'
import { logout } from '../../actions/currentUser'
import { Button } from 'antd'

export const Logout = ({ onLogOut }) => {
  const onClick = () => {
    onLogOut()
    history.push('/')
  }

  return (
    <Button ghost onClick={onClick}>
      Log Out
    </Button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onLogOut: () => dispatch(logout())
})

export default connect(undefined, mapDispatchToProps)(Logout)
