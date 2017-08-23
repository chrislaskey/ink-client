import React from 'react'
import { Link } from 'react-router-dom'
import { map } from 'lodash'

const List = ({ notes, path }) => {
  const active = window.location.pathname.split('/').slice(-1)[0]
  const renderNotes = (items) => (
    map(items, (item) => (
      <li key={item.uid} className={item.uid === active ? 'active' : ''}>
        <Link to={path + '/' + item.uid}>
          {item.title}
        </Link>
      </li>
    ))
  )

  return (
    <ul className='notes'>
      {renderNotes(notes)}
    </ul>
  )
}

List.displayName = 'NotesList'

export default List
