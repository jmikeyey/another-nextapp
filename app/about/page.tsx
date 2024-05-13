import React from 'react'
import About from '../_components/about/About'


const AboutPage = () => {
  const data = "sample to ";

  return (
    <>
      <h1>About Page</h1>
      <button onClick={()=>{console.log('click')}}>Sign in</button>
      <About sample={data}/>
    </>
  );
}

export default AboutPage