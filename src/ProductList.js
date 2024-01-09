import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Product from "./Product";
const ProductList = ({ userData, deleteItem }) => {
  return (
    <>
      <h1>ProductList</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product ID</th>
            <th style={{ width: "200px" }}>Product Name</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th style={{ maxWidth: "200px" }}>Description</th>
            <th>Category</th>
            <th>Rating</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Product userData={userData} deleteItem={deleteItem} />
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
