import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import data from "./mock.json";
import ProductCards from "./ProductCards";
function App() {
  const [userData, setUserData] = useState(data);
  useEffect(() => {
    localStorage.setItem("ShopList", JSON.stringify(userData));
  }, [userData]);
  const deleteItem = (id) => {
    // alert(id);
    const newList = userData.filter((item, index) => item.id !== id);
    if (newList) {
      setUserData(newList);
    }
  };
  const getDataFromLS = () => {
    const lsdata = localStorage.getItem("ShopList");
    if (lsdata) {
      console.log("lsdata", lsdata);
      // return JSON.parse(lsdata);
    }
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/add"
          element={<AddProduct data={userData} getDataFromLS={getDataFromLS} />}
        />
        <Route path="/update" element={<UpdateProduct />} />
        <Route
          path="/product_list"
          element={<ProductList userData={userData} deleteItem={deleteItem} />}
        />
        <Route
          path="/products"
          element={<ProductCards userData={userData} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
