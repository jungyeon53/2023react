import { useState } from 'react';
import './App.css'
import { vData, vData1 } from '../data.js';
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      {/* expand > lg, md 등 넣어줄 수 있다. */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* me-auto : margin end auto */}
            {/* margin: 0 auto -> mr-auto */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Product</Nav.Link>
              <Nav.Link href="#link">Product</Nav.Link>
              <Nav.Link href="#link">Board</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="visualWrap mb-3">
        {/* py-5 패딩값으로 위아래 조절하기 */}
        <Container className='visualWrap bg-primary py-5 text-white text-center'>
          <h3>Lorem ipsum dolor hic eveniet deserunt inventore quod molestias esse!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda iure vero inventore eligendi iusto nam</p>
        </Container>
      </div>

      <Container className='mb-2 mb-md-5'>
        <h3 className='text-center mb-3'>Gallery</h3>
        <Row>
          <Col sm={6} md={3} lg={3} className='mb-3'>
            <Card>
              <Card.Img variant="top" src="../img/Frame 1.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="../img/Frame 1.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="../img/Frame 1.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* 평소에는 안보이다가 md일 때 보이는 건 d-md-block */}
          <Col sm={6} md={3} lg={3} className='d-none d-md-block'>
            <Card>
              <Card.Img variant="top" src="../img/Frame 1.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="contentWrap01 py-2 py-md-5">
      <Container>
        <h3 className='text-center mb-3'>Gallery</h3>
        <Row>
          <Col sm={6} md={3} lg={3} className='mb-3'>
            <Card>
              <Card.Img variant="top" src="../img/1.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="../img/2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="../img/3.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={3} className='mb-2'>
            <Card>
              <Card.Img variant="top" src="../img/4.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>


    </div>
  )
}



export default App;