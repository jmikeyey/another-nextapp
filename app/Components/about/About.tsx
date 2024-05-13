'use client'
import React, { useState } from 'react'

interface AboutProps {
  sample: string
}
const About = (props: AboutProps) => {
  const { sample } = props
  console.log(sample);
  const [count, setCount] = useState(0)
  const counter = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h6>Hello About Component</h6>
      <button onClick={counter}>Click Me {count} </button>
      <p>{sample}</p>
    </>
  );
};

export default About