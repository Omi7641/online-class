import React from "react";
import Data from "./userData/Data";
import "./App.css";
import Courses from "./component/Course/Courses/Courses";
import Order from "./component/Order/Order";
import { useState } from "react";
import schooLogo from "./img/online.png";
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

      <div style={{ textAlign: "center" }}>
        <h4> Intotal Course: {order.length}</h4>
      </div>
      <div>
        {Data.map((item) => (
          <Courses item={item} handleadd={handleadd}></Courses>
        ))}
      </div>
      <div style={{ textAlign: "right" }}>
        <Order cart={cart}></Order>
      </div>
    </div>
  );
}
export default App;
