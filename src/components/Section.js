import React from 'react'

const Section = ({bigText,text1, text2}) => {
  return (
    <section className='hero'>
<p className='subhead'>{text1}. </p>
    <h3 className='head'>{bigText}</h3>
<h2 className='down-arrow'>{text2}</h2>
</section>
  )
}

export default Section