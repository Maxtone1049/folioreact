import React from 'react'
import shape from '../components/assets/shape.svg'
import js from '../components/assets/js.svg'
import wordpress from '../components/assets/worpress.svg'
import php from '../components/assets/php.svg'
import html from '../components/assets/html.svg'

function Skill({yrt}) {
  return (
    <div className='wins' id={yrt}>
      <h2>My Skills</h2>
      <p className='p'>Here are the List of Service i render</p>
      <div className='ads'>
        <div className='firedown'>
          <Compo pic={wordpress} text={'Wordpress'} pics={shape} />
          <Compo pic={js} text={'Javascript'} pics={shape} />
        </div>
        <div className='firedown'>
          <Compo pic={php} text={'Php'} pics={shape} />
          <Compo pic={html} text={'Python'} pics={shape} />
        </div>
        <div className='firedown'>
          <Compo pic={html} text={'HTML'} pics={shape} />
          <Compo pic={php} text={'Php'} pics={shape} />
        </div>
      </div>
    </div>
  )
}

function Compo({ text, pics, pic }) {
  return (
    <div className='fig'>
      <img className='fig_img' src={pic} alt='' />
      <div className='in_img'>
        <p>{text}</p>
        <img src={pics} alt='' />
      </div>
    </div>
  )
}
export default Skill