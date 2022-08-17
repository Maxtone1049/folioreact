import React from 'react'
import white from './assets/message-white.svg'
import green from './assets/twitter-white.svg'
import yello from './assets/linked-white.svg'

function Footer() {
  return (

    <footer className='site-footer'>
      <div>
        <h1>Maxwell Anthony</h1>
        <div className='ad'>
          <a href='https://twitter.com/Tonysignificant' target='_blank' rel='noreferrer'><img src={green} alt='' /></a>
          <a href='https://www.linkedin.com/in/maxwell-anthony-38335222b/' target='_blank'><img src={yello} alt='' /></a>
          <a href='mailto:tonymax1049@gmail.com' target='_blank' rel='noreferrer'><img src={white} alt='' /></a>
        </div>
      </div>
      <p>Copyright &copy; | All rights Reserved</p>
    </footer>
  )
}

export default Footer