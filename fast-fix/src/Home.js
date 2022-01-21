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
        <h1>Salon at Home</h1>
      </div>

      <div className="home__section">
      <Card
          id="2"
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="AC Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="AC Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />

<Card
          id="2"
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="AC Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
         <Card
          id="2"
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="AC Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
      </div>
      <div className="title">
        <h1>Plumbing</h1>
      </div>

      <div className="home__section">
      <Card
          id="2"
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="AC Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          id="2"
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="AC Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />

        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="title">
        <h1>Home Cleaning</h1>
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />

        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />

        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="title">
        <h1>Home Cleaning</h1>
      </div>
      <div className="home__section">
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />

        <Card
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
