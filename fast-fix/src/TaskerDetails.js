import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./TaskerDetails.css";
import Taskers from "./Taskers";
function TaskerDetails() {
  const [taskers, setTaskers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
useEffect(() => {
  db.collection("ServiceProviders")
  .onSnapshot((snapshot) =>
  setTaskers(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      src: doc.data().src,
      price: doc.data().price,
      service: doc.data().service,
      city: doc.data().city,
      phone: doc.data().phone,
    }))
  )
  );
}, []);
  
  return (
    <div>
      <div className="Select__option">
        <select>
          <option></option>
        </select>
      </div>
      <div className="SearchButton__tas">
        <form>
          <input
            type="text"
            placeholder="Search by Location!"
            className="SearchButton__class"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
        </form>
      </div>
      {taskers
        .filter(({ name }) => {
          if (searchTerm === "") {
            return name;
          } else if (
            name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return name;
          }
        })
        .map(({ name, id, price, src, phone, service, city }) => (
          <Taskers
            id={id}
            name={name}
            src={src}
            phone={phone}
            service={service}
            city={city}
            price={price}
          />
        ))}
    </div>
  );
}

export default TaskerDetails;
