import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ userData, deleteItem }) => {
  const navigate = useNavigate();
  const editItem = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <>
      {userData.map((elem) => (
        <tr key={elem.id}>
          <td>{elem.id}</td>
          <td>{elem.title}</td>
          <td>
            <img
              src={elem.image}
              alt={elem.title}
              className="img-fluid"
              style={{ width: "100px" }}
            />
          </td>
          <td>{elem.price}</td>
          <td>
            {elem.description.length > 400
              ? `${elem.description.substring(0, 400)}...`
              : elem.description}
          </td>
          <td>{elem.category}</td>
          <td>{elem.rating.rate}</td>

          <td>
            <Button variant="danger" onClick={() => deleteItem(elem.id)}>
              Delete
            </Button>
            <Button variant="primary" onClick={() => editItem(elem.id)}>
              Edit Item
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Product;
