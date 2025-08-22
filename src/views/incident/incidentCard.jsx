import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';

const CardItem = ({ imageSrc, title, description, additionalContent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Col className='mt-3' md={4}>
    <Card>
      <Card.Img variant="top" src={imageSrc} />
      <div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleToggleModal}>
          Read More
        </Button>
      </div>
    </Card>

    <Modal show={showModal} onHide={handleToggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{ __html: additionalContent }} />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </Col>
  );
};

export default CardItem;