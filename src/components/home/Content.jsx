import { Button, Container, Row, Col } from 'react-bootstrap';
import { MdLightbulb } from "react-icons/md";

function Content() {
    return (
        <Container className='mb-5'>
            <h3>The Title</h3>
            <Row>
                {/* align-items-start, end도 있음  
                    justify-content-center md미만일 때는 가운데 
                */}
                <Col sx={12} md={6} className='order-2 order-md-1 d-flex justify-content-center align-items-center'>
                    {/* flex-colum은 방향을 row 에서 세로 방향으로 바꿔준다. 그래서 align-items-center로 가운데 정렬을 해준다 
                        align-items-start는 영역의 왼쪽으로 붙는다
                    */}
                    <div className="d-flex flex-column align-items-center align-items-md-start">

                        <div className="icon">
                            {/* icons 가져온 것은 font로 인식하고 리액트는 _ 를 인식하지 못하기 때문에 대문자로 표현 */}
                            <MdLightbulb style={{ color: "white", fontSize: "2em" }} />
                        </div>
                            <div className='text-center text-md-start'>
                                <h4>title</h4>
                                <p>Lorem</p>
                            </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className='banner order-2 order-md-2 position-relative overflow-hidden'>
                    <img src="./img/1.webp" alt="" className='w-100'style={{left:10, top:10}} />
                    <img src="./img/Frame 2.png" alt="" className='img0102' style={{right:0, bottom:0}} />
                </Col>
            </Row>
            <Row>
                <Col sx={12} md={6} className='order-1 order-md-2'>
                    {/* flex-colum은 방향을 row 에서 세로 방향으로 바꿔준다. 그래서 align-items-center로 가운데 정렬을 해준다 
                        align-items-start는 영역의 왼쪽으로 붙는다
                    */}
                    <div className="banner d-flex flex-column align-items-center align-items-md-start">

                        <div className="icon">
                            {/* icons 가져온 것은 font로 인식하고 리액트는 _ 를 인식하지 못하기 때문에 대문자로 표현 */}
                            <MdLightbulb style={{ color: "white", fontSize: "2em" }} />
                        </div>
                            <div className='text-center text-md-start'>
                                <h4>title</h4>
                                <p>Lorem</p>
                            </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className='banner order-1 order-md-1 position-relative overflow-hidden'>
                <img src="./img/2.jpg" alt="" className='w-100'style={{left:10, top:10}} />
                </Col>
            </Row>
        </Container>
    )
}

export default Content;