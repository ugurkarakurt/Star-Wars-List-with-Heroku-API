import React from 'react';
import mainLogo from '../star-wars-logo.svg';
import { useEffect } from 'react';

export default function Home(setTitle) {
  useEffect(() => {
    setTitle.props('Home Page')
  });
  return (
    <div className='home'>
      <img width={'50%'} src={mainLogo} alt={mainLogo} />
    </div>
  )
}
