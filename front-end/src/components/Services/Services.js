import React from 'react'
import Service from '../Service/Service'
import Header from '../Header'
import Footer from '../Footer'
const Services = ({services}) => {
  return (
    <div className='services'>
      <Header/>
  <div className='group'>
   {
       services.map((service)=>{
           return <Service key={service.id} service={service}/>
       })
   }
   </div>
   <Footer/>
    </div>
  )
}

export default Services