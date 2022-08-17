import React from 'react'
import twitter from '../components/assets/twitter-white.svg';
import linked from '../components/assets/linked-white.svg';

export default function Header() {


  return (
    <header>
      <a href='.' className='logo' rel='noreferrer'>
        T-Prime
      </a>
      <nav>
        <p className='close'>&times; </p>
       
          <ul>
            <li><a href='#about'> About Me</a></li>
            <li><a href='#services'> Services</a></li>
            <li><a href='#projects'> Projects</a></li>
            <li><a href='#contact'> Contact Me</a></li>
          </ul>
        
        <div>
          <a href='https://linkedIn.com/Maxwell-anthony' target='_blank' rel='noreferrer'>
            <img src={linked} className='toggle' alt='' />
          </a>
          <a href='https://twitter.com/Tonysignificant' target='_blank' rel='noreferrer'>
            <img src={twitter} className='toggle' alt='' />
          </a>
        </div>
      </nav>
      <p onClick={open}  className='menu'>&#9776;</p>
    </header>
  )

  function open (){
    const menu = document.querySelector('.menu')
    const close = document.querySelector('.close')
    const nav = document.querySelector('nav')

    menu.addEventListener ('click', ()  => {
        nav.classList.add('open-nav')
    })

    close.addEventListener ('click', ()  => {
        nav.classList.remove('open-nav')
    })
  }
 }
