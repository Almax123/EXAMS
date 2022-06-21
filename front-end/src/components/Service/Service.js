import React from "react";


const Service = ({service}) => {
  return (
    <div className="design-box">
    <p>{service.icon}</p>
     <h2>{service.title}</h2>
     <p>{service.text}</p>
    </div>
  )
}

export default Service