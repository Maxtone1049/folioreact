import React from 'react'

const ServiceRend = ({pics, text, smallText}) => {
  return (
    <>
    
    <div className='feature'>
        <img className='pics' src={pics} alt='icon'/>
        <h3 className='title'>{text}</h3>
        <p className='desc'>{smallText}</p>
    </div>
    </>
  )
}

export default ServiceRend