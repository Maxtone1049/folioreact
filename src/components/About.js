import React from 'react'


export default function About({calj,classhu,bigT,smallT,ppd, ppn, linl, twitt,reach}) {
  return (
    <section className={classhu} id={calj}>
        <h2>{bigT}</h2>
        <p>{smallT} <br/>  <br/> </p>
        <div className='dd'>
<a href={linl} rel='noreferrer'> <img src={ppd} alt='' className='toggle'/></a>
<a href={twitt} rel='noreferrer'> <img src={ppn} alt='' className='toggle'/></a>
<p>{reach}</p>
        </div>
    </section>
  )
}
