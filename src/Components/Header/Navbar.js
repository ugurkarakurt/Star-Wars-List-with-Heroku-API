import React from 'react';
import GridType from './GridType';
import BackButton from './BackButton'

export default function Navbar(props) {
  return (
    <nav>
      <div className="back-button">
        <BackButton {...props} />
      </div>
      <div className="change-grid">
        <GridType {...props} />
      </div>
    </nav>
  )
}
