import React, { useState, useEffect } from "react";

import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import HomeCard from "./HomeCard";
import { db } from "./firebase";

function Home() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    db.collection("services").onSnapshot((snapshot) =>
      setServices(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="home">
      <Banner />

      <HomeCard />
 
      <div className="title">
        <h1>Featured Tasks</h1>
      </div>

      <div className="home__section">
        {services.map(({ id, src, title, description, price }) => (
          <Card
            id={id}
            src={src}
            title={title}
            description={description}
            price={price}
          />
        ))}
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://www.msgfacility.com/wp-content/uploads/2020/08/Gardening-Services.png"
          title="Yard Work Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="3"
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="General Cleaning"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Office Administration"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="title">
        <h1>General Cleaning</h1>
      </div>

      <div className="home__section">
        <Card
          src="https://2greenchicks.com/wp-content/uploads/2017/11/shutterstock_657213997.jpg"
          title="House Cleaning Service"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1616804087352-0d82fc0c37bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwd2FzaGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
          title="Car Washing"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />

        <Card
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Office Administration"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Office Administration"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="title">
        <h1>Shopping + Delivery</h1>
      </div>

      <div className="home__section">
        <Card
          id="2"
          src="https://assets.gqindia.com/photos/6070617423780a7fa9a3ec07/master/pass/Online%20grocery%20services.jpeg"
          title="Grocery Shopping & Delivery"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://arriival.com/wp-content/uploads/2019/05/satisfied.jpg"
          title="Delivery Service"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://files.list.co.uk/images/2020/11/27/list-2-LST409858.jpg"
          title="Pet Food Delivery"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />

<Card
          id="2"
          src="https://images.unsplash.com/photo-1597178380795-38c56a1a7053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80"
          title="Baby Food Delivery"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="title">
        <h1>Home Cleaning</h1>
      </div>
      <div className="home__section">
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />

        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="home__section">
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        >
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="title">
        <h1>Home Cleaning</h1>
      </div>
      <div className="home__section">
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />

        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
    </div>
  );
}

export default Home;