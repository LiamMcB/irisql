import React from 'react';
import ReactPlayer from 'react-player';


export default function DemoSection () {
  return (
    <div>
      <div className='section-headings demo-section d-flex justify-content-center'>
        <hr className= 'demo-hr'></hr>
        <h2>Watch A Demo</h2>
        <hr className= 'demo-hr'></hr>
      </div>
      <div className= 'demo-video d-flex justify-content-center'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=hY7m5jjJ9mM"
          controls = 'true'
        />
      </div>
    </div>
  )
}
