import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css';
import fruitsarrangement from'../images/fruitsarrangement.jpg'

function Home() {
  return (
    <div className='bg' style={{ backgroundImage: `url(${fruitsarrangement})` }}>
     <Container fluid>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
</Container>
      
    </div>
  )
}

export default Home
