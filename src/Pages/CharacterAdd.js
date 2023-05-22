import React from 'react'
import { useEffect } from 'react';
export default function About(setTitle) {
  useEffect(() => {
    setTitle.props('Character Add')
  });
  return (
    <div>
      add
    </div>
  )
}
