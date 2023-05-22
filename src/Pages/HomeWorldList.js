import React from 'react';
import { useEffect } from 'react';
import Card from '../Components/Cards/homeworlds/Card.component';

export default function HomeWorldList(props) {
  const title = props.title
  const homeworlds = props.homeworlds

  useEffect(() => {
    title('Home World List');
  }, [title]);


  return (
    <div className='homeworld-list'>
      {homeworlds.map((homeworld) => (
        <Card props={homeworld} key={homeworld.id} />
      ))}
    </div>
  )
}
