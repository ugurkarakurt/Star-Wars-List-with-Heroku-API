import React from 'react'
import grid4 from './img/grid-4.svg';
import grid2 from './img/grid-2.svg';

export default function GridType(props) {
  const gridType = props.gridType;
  const gridTypes = [
    { src: grid4, type: 4 },
    { src: grid2, type: 2 }
  ];

  return (
    <div className='grid-type'>
      {gridTypes.map((grid) => (
        <span onClick={props.onClickHandler} data-grid={grid.type} className={`grid-type-${grid.type} ${Number(gridType) === Number(grid.type) ? 'selected' : ''}`} key={`type-${grid.type}`}>
          <img width={30} height={30} src={grid.src} alt={grid.type} />
        </span>
      ))}
    </div>
  )
}
