import { useState, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/UJJWAL.jpg'
const Banner =()=> {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Programmer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    return(
        <section className="banner" id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                     <span className="tagline"> Welcome To My Portfolio !</span>
                     <h1>{`Hi! I'm Ujjwal`} <span className="txt-rotate" dataPeriod="400" data-rotate='[ "Web Developer", "Programmer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Self-starter and Passionate Second year Computer Science & Engineering
student and an Enthusiast Learner in Programming,
Development and Technology Related Stuff.
<h3>A connoisseur who Love to build logics and Solve
problems!</h3></p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                      
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="header Img" className="myphoto" />

                </Col>
            </Row>
        </Container>

        </section>
    )
}
export default Banner