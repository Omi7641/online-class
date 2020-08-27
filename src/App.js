import React from "react";
import Data from "./userData/Data";
import "./App.css";
import Courses from "./component/Course/Courses/Courses";
import Order from "./component/Order/Order";
import { useState } from "react";
import schooLogo from "./img/online.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [order, setOrder] = useState(Data);
  console.log(Data);
  const [cart, setCart] = useState([]);
  const handleadd = (item) => {
    const newOrder = [...cart, item];
    setCart(newOrder);
  };
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <img src={schooLogo} alt="" />
      </div>
      {
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </nav>
      }
      <div style={{ textAlign: "center", color: "salmon" }}>
        <h2> Intotal Course: {order.length}</h2>
      </div>
      <div class="row">
        <div class="col-8">
          <div>
            {Data.map((item) => (
              <Courses item={item} handleadd={handleadd}></Courses>
            ))}
          </div>
        </div>
        <div class="col-4 half-part">
          <div style={{ textAlign: "right", color: "salmon" }}>
            <Order cart={cart}></Order>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
