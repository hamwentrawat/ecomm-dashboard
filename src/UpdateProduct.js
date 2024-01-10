import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useEffect } from "react";
const UpdateProduct = ({ userData, getDataFromLS }) => {
  const { id } = useParams();
  console.log("343434", id);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescript] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    let dataItem = userData.filter((elem) => elem.id == id);
    console.log("sfsfs", dataItem.title, dataItem);
    setTitle(dataItem[0].title);
    setPrice(dataItem[0].price);
    setCategory(dataItem[0].category);
    setDescript(dataItem[0].description);
    setRate(dataItem[0].rating?.rate);
    setImage(dataItem[0].image);
  }, []);
  console.log("title", title);
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={description}
            onChange={(e) => setDescript(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="rating" label="Rating">
          <Form.Control
            placeholder="rating"
            aria-label="rating"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingTitle"
          label="Product Image"
        >
          {/* <Form.Control
            type="file"
            placeholder="Product Image"
            aria-label="Product Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          /> */}
          <Image src={image} thumbnail style={{ width: "100px" }} />
        </FloatingLabel>
        <Button onClick={getDataFromLS}>Add Product</Button>
        {/* <Button onClick={addProduct}>Add Product</Button> */}
      </Form>
    </>
  );
};

export default UpdateProduct;
