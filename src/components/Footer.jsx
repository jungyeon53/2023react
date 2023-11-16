import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaGithubAlt,FaFaceFlushed } from "react-icons/fa6";
import { SiNaver } from "react-icons/si";


function Footer(){
    return (
        <div style={{background:"#ddd"}} className='py-5'>
            <Container>
                <Row className='mb-5'>
                    <Col md={6}>
                        <ul className='d-flex justify-content-center justify-content-me-start'>
                            {/* # : 클릭하면 위로 쭉 올라감 #! 안올락마  */}
                            <li><a href="#!">Privacy</a></li>
                            <li className='px-3'>/</li>
                            <li><a href="#!">Team</a></li>
                            <li className='px-3'>/</li>
                            <li><a href="#!">Sitemap</a></li>
                        </ul>
                    </Col>
                    <Col md={6} className='d-flex  justify-content-md-end justify-content-center'>
                        <ul className='d-flex gap-3'>
                            <li>
                            <FaGithubAlt />
                            </li>
                            <li>
                            <FaFaceFlushed />
                            </li>
                            <li>
                            <SiNaver />
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center text-md-start px-3'>
                        <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quam.</p>
                        <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati error atque magni quas ut eligendi tempore provident eius culpa ea ipsum similique esse cum dolorem, nam quaerat vel. Commodi?</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;