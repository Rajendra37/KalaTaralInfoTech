import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import "../home/home.css"
import sdata from '../service/ServiceData'
import Carosual from './Carosual'

export default function Home() {
  const columnsPerRow = 5;
  return (
    <>
      <Carosual />
      <div className='Maindivhome'>
        <Container>
          <Row xs={1} md={columnsPerRow}>
            {sdata.map((items) => {
              return (
                <Card style={{ width: '14rem' }} className="vv myCard" >
                  <Card.Img variant="top" src={items.src} className="myCardImg" />
                  <Card.Body>
                    <Card.Title><h6>{items.Title}</h6></Card.Title>
                  </Card.Body>
                </Card>
              )
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}
