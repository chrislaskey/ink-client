import React from 'react'

export const Label = ({ onCheck, label }) => (
  <div className='label'>
    <div className='label-header'>
      <h1>{label.name}</h1>
    </div>
    <div className='label-body'>
      <p>{label.color}</p>
    </div>
  </div>
)

Label.displayName = 'Label'

export default Label
