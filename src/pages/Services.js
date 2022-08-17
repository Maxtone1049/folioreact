import React from 'react'
import ServiceRend from '../components/Services/ServiceRend'
import train from '../components/assets/train.svg'
import collaborate from '../components/assets/collaborate.svg'
import device from '../components/assets/device.svg'
import database from '../components/assets/database.svg'
import develop from '../components/assets/develop.svg'
import techwriting from '../components/assets/techwriting.svg'
import testing from '../components/assets/testing.svg'
import saas from '../components/assets/saas.svg'
import '../App.css'

const Services = ({yeo}) => {
  return (
    <div className='more-info' id={yeo}>
      <ServiceRend pics={train} text={'Training'} smallText={'I offer instructor-led training in a way that fits with the way you work. '}/>
        <ServiceRend pics={collaborate} text={'IT Consulting'} smallText={'I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives. '}/>
        <ServiceRend pics={device} text={'Responsive Web Development'} smallText={'I Help design Mobile-friendly, world-class websites that helps scales your business and helps user experience get better. '}/>

        <ServiceRend pics={database} text={'Database Development'} smallText={'With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization.'}/>

        <ServiceRend pics={train} text={'Customer Software Development'} smallText={'I help develop technical solutions in form of softwares that answer to the needs of customer’s problems.'}/>

        <ServiceRend pics={testing} text={'Software Testing'} smallText={'I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly. '}/>
        
        <ServiceRend pics={saas} text={'Saas Development'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.'}/>

        <ServiceRend pics={techwriting} text={'Technical Writing'} smallText={'I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information.'}/>

        <ServiceRend pics={develop} text={'Web Development'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.'}/>
        
    </div>
  )
}

export default Services