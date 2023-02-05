import React from 'react'
import { Container,Row,Col ,Tab,Nav } from 'react-bootstrap'
import ProjectCards from './ProjectCards';
import projImg1 from '../assets/img/Weather.png'
import projImg2 from '../assets/img/Rescape.png'
import projImg3 from '../assets/img/netflixclone.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
const Projects = () => {
    const projects = [
        {
          title: "Weather App",
          description: "Design & Development",
          imgUrl: projImg1,
          link: "https://app-a6af4.web.app"
        },
        {
          title: "Rescape-Resume Building App",
          description: "Design & Development",
          imgUrl: projImg2,
          link: 'https://rescape-sasuke.web.app/'
        },
        {
          title: "Netflix Clone",
          description: "Design & Development",
          imgUrl: projImg3,
          link: 'https://netflix-clone-4fbe7.web.app/'
        },
      ];
    
  return (
    <div>
       <section className="project" id="projects">
        <Container>
            <Row>
                 <Col>
                 <div className='project-bx wow zoomIn'>
                 <h2>Projects !</h2>
                    <p>
                        The Followings are the projects that I completed recently. <br /> The following projects are made by using React.js,HTML,CSS & Javascript.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     <Nav variant="pills" defaultActiveKey="/home">
                      <Nav.Item>
                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                       <Nav.Link eventKey="third"> Tab 3</Nav.Link>
                      </Nav.Item>
                     </Nav>
                     <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>{
                                projects.map((project,index)=> {
                                    return(
                                       <ProjectCards
                                        key={index}
                                        {...project}
                                       />
                                    )
                                })
                            }
                            </Row>
                        </Tab.Pane>

                     <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                     </Tab.Pane>
                     </Tab.Content>
                    </Tab.Container>
                 </div>
                    
                 </Col>  
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}  />
       </section>
    </div>
  )
}

export default Projects
