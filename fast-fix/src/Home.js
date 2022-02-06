import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
      
        <Card
          id="12321341"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price={45}
        />
        <Card
          id="49538094"
          src="https://www.msgfacility.com/wp-content/uploads/2020/08/Gardening-Services.png"
          title="Yard Work Services"
          description="Unique activities we can do together, led by a world of hosts."
          price={50}
        />
        <Card
          id="3"
          src="https://images.unsplash.com/photo-1592365559101-19adfefdf294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Car Washing"
          description="Unique activities we can do together, led by a world of hosts."
          price={50}
        />
        <Card
          id="4"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Office Administration"
          description="Unique activities we can do together, led by a world of hosts."
          price={65}
        />
      </div>
      <div className="title">
        <h1>General Cleaning</h1>
      </div>

      <div className="home__section">
        <Card
          id="5"
          src="https://2greenchicks.com/wp-content/uploads/2017/11/shutterstock_657213997.jpg"
          title="House Cleaning Service"
          description="Unique acti  vities we can do together, led by a world of hosts."
          price={25}
        />
        <Card
          id="6"
          src="https://images.unsplash.com/photo-1592365559101-19adfefdf294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Car Washing"
          description="Unique activities we can do together, led by a world of hosts."
          price={50}
        />

        <Card
          id="7"
          src="https://tidytimesaver.com/app/uploads/2017/10/Tidy-Time-Saver-Garage-Cleaning.jpg"
          title="Garage Cleaning"
          description="Unique activities we can do together, led by a world of hosts."
          price={75}
        />
        <Card
          id="8"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Office Administration"
          description="Unique activities we can do together, led by a world of hosts."
          price={15}
        />
      </div>
      <div className="title">
        <h1>Shopping + Delivery</h1>
      </div>

      <div className="home__section">
        <Card
          id="9"
          src="https://assets.gqindia.com/photos/6070617423780a7fa9a3ec07/master/pass/Online%20grocery%20services.jpeg"
          title="Grocery Shopping & Delivery"
          description="Unique activities we can do together, led by a world of hosts."
          price={500}
        />
        <Card
          id="10"
          src="https://arriival.com/wp-content/uploads/2019/05/satisfied.jpg"
          title="Delivery Service"
          description="Unique activities we can do together, led by a world of hosts."
          price={500}
        />
        <Card
          id="11"
          src="https://files.list.co.uk/images/2020/11/27/list-2-LST409858.jpg"
          title="Pet Food Delivery"
          description="Unique activities we can do together, led by a world of hosts."
          price={500}
        />

        <Card
          id="12"
          src="https://images.unsplash.com/photo-1597178380795-38c56a1a7053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80"
          title="Baby Food Delivery"
          description="Unique activities we can do together, led by a world of hosts."
          price={500}
        />
      </div>
      <div className="title">
        <h1>Office Services</h1>
      </div>
      <div className="home__section">
        <Card
          id="13"
          src="https://alpinemaintenance.com/wp-content/uploads/2019/07/office-cleaning.jpeg"
          title="Commercial Cleaning"
          description="Unique activities we can do together, led by a world of hosts."
          price={500}
        /> 
        <Card
          id="14"
          src="https://mattthepainter.com/wp-content/uploads/professional-painters-1024x683.jpg"
          title="Commercial Painting"
          description="Unique activities we can do together, led by a world of hosts."
          price={500}
        />
        <Card
          id="15"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWFAw0xhR8qcc4KYZNeIBQIcQvTA-r3PBrp0Q880iSPwzxP4PEoqAQW-GCJvsRox1MsQ&usqp=CAU"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price={500}
        />

        <Card
          id="16"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="home__section">
        <Card
          id="17"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="18"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="19"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />

        <Card
          id="20"
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
          id="21"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="22"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />

        <Card
          id="23"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="24"
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Furniture Assembly"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="home__bottom">
        <div className="bottom__container">
        <p>_____________________________</p>
        <h1>Featured Taskers </h1>
        </div>
        <div className="bottom__card">
        
         
       
       
          </div>
      </div>
    </div>
  );
}

export default Home;
