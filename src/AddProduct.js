// import React, { useState } from "react";

import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const AddProduct = ({ getDataFromLS }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categ, setCateg] = useState("");
  const [descript, setDescript] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  return (
    <>
      <Form>
        <FloatingLabel className="mb-3" controlId="floatingTitle" label="Title">
          <Form.Control
            placeholder="title"
            aria-label="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="price" label="Price">
          <Form.Control
            placeholder="price"
            aria-label="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingTitle"
          label="Category"
        >
          <Form.Control
            placeholder="category"
            aria-label="category"
            value={categ}
            onChange={(e) => setCateg(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          className="mb-3"
          controlId="floatingTitle"
          label="Description"
        >
          <Form.Control
            placeholder="description"
            aria-label="description"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingTitle"
          label="Product Image"
        >
          <Form.Control
            type="file"
            placeholder="Product Image"
            aria-label="Product Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Image src={image} thumbnail />
        </FloatingLabel>
        <Button onClick={getDataFromLS}>Add Product</Button>
        {/* <Button onClick={addProduct}>Add Product</Button> */}
      </Form>
    </>
  );
};

export default AddProduct;
