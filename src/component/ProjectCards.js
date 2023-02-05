import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCards = ({title,description,imgUrl,link}) => {
    // dothis()={
    //     <a href="https://netflix-clone-4fbe7.web.app/"></a>
    // }
  return (
    <Col sm={6} md={4}>
        <a href={link} target='_blank'><div className='proj-imgbx'>
           <img src={imgUrl}/>
           <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
           </div>
      </div></a>
    </Col>
    
  )
}

export default ProjectCards
