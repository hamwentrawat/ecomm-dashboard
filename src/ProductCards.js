import React, { useState } from "react";
import { Button, Card, Row, Container, Col } from "react-bootstrap";
const ProductCards = ({ userData }) => {
  const [cards, setCards] = useState(userData);
  return (
    <>
      <h2>Product Cards</h2>
      <Container>
        <Row>
          {cards.map((card) => (
            <Col className="col-md-4 mb-4" key={card.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={card.image}
                  alt={card.title}
                  className="product_img"
                  loading="lazy"
                />
                <Card.Body>
                  <span>{card.rating.rate}</span>
                  <Card.Title>
                    {card.title.length > 50
                      ? `${card.title.substring(0, 50)}...`
                      : card.title}
                  </Card.Title>
                  <h4>{card.category}</h4>
                  <Card.Text>
                    {card.description.length > 150
                      ? `${card.description.substring(0, 150)}...`
                      : card.description}
                  </Card.Text>
                  <Button variant="warning">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductCards;
