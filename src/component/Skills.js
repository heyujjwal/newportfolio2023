import React from 'react'
// import { Container,Row,Col } from "react-bootstrap" 
import meter1 from "../assets/img/untitled (2).png";
import meter2 from "../assets/img/untitled (3).png";
import meter3 from "../assets/img/untitled (4).png";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import Carousel from 'react-multi-carousel'
import colorSharp from "../assets/img/hh.jpg"
import "react-multi-carousel/lib/styles.css"
const Skills = () => {
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><h5>Technical & Coding Language</h5> <br />Data Structure,Web Design, C++, C,Python,Javascript,HTML5,CSS,Github,React.js,Google Cloud,Algorithm <br />
                        <br /><h5> General </h5><br /> Graphic Design,Video Editing,Teamwork,Management,Problem Solving</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>UI Designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Competitive Programing</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Video Editing</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills
