import React, { useEffect } from 'react'
import Card from 'react-bootstrap/esm/Card'
import "../service/service.css"
import ftthimg from "../../assets/IMG_9448.PNG"
import teliImg from "../../assets/IMG_9458.PNG"
import vdpImg from "../../assets/IMG_9459.PNG"
import srImg from "../../assets/IMG_9450.PNG"
import sdata from './ServiceData'
import Col from 'react-bootstrap/esm/Col'
import { Button, Container, Modal, Row } from 'react-bootstrap'


function MyVerticallyCenteredModal(props: any,) {

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.Title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.Discription}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      )
    </>
  )
}

export default function Service(props: any) {
  const columnsPerRow = 5;
  const [modalShow, setModalShow] = React.useState(false);
  const [serviceData, setService] = React.useState({
    Title: "",
    src: "",
    Discription: ""
  })


  const showDate = (items: any) => {
    setService(items)
    setModalShow(true)

  }
  return (
    <div className='Maindivservice'>
      <Row xs={1} md={columnsPerRow}>
        {sdata.map((items) => {
          return (
            <div>
              <Card style={{ width: '14rem' }} className="myCardStyle vv">
                <Card.Img variant="top" src={items.src} className="mycardImg" />
                <Card.Body>
                  <Card.Title><h6>{items.Title}</h6></Card.Title>
                </Card.Body>
                <Button variant="dark" onClick={() => showDate(items)}>Know More</Button>
              </Card>
            </div>
          )
        })}
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        {...serviceData}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
