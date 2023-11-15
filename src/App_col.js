import { useState } from 'react';
import './App.css'
import {vData, vData1} from './data.js';
import { Button, Container, Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button>{' '}
      <div className="container bg-primary">test</div> */}
      <div className='py-4' style={{background: 'skyblue'}}>
      <Container>
        <Row>
          <Col sm={6} md={3}>
          test1
          </Col>
          <Col sm={6} md={3}>
          test2
          </Col>
          <Col md={3}>
          test3
          </Col>
          <Col md={3}>
          test4
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}



export default App;