import React from 'react'
import About from '../Components/about/About'


const AboutPage = () => {
  const data = "sample to ";

  return (
    <>
      <h1>About Page</h1>
      <About sample={data}/>
    </>
  );
}

export default AboutPage