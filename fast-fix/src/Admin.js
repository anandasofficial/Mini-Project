import React, { useState, useEffect } from "react";
import "./Admin.css";
import { Button } from "@material-ui/core";

import { db } from "./firebase";
function Admin() {
  const [categoryData, setCategoryData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [updateCategoryName, setUpdateCategoryName] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    db.collection("services").onSnapshot((snapshot) => {
      setServiceData(
        snapshot.docs.map((doc) => ({
          serviceId: doc.id,
          data: doc.data(),
        }))
      );
    });
    db.collection("categories").onSnapshot((snapshot) => {
      setCategoryData(
        snapshot.docs.map((doc) => ({
          categoryId: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    db.collection("categories").add({
      name: categoryName,
    });
    setCategoryName("");
  };
  const updateData = (e) => {
    e.preventDefault();
    db.collection("categories").doc(dataIdToBeUpdated).update({
      title: updateCategoryName,
    });
  };

  const deleteCategory = (categoryId) => {
    db.collection("categories").doc(categoryId).delete();
  };
  const deleteService = (serviceId) => {
    db.collection("services").doc(serviceId).delete();
  };

  const addService = () => {
    const categoryId = prompt("Please enter the service!");

    if(categoryId) {
      db.collection("categories").doc(categoryId).collection("services").add({
        title: title,
      });
    }
  }
  return (
    <div className="Admin">
      <div className="Admin__container">
        <div className="Admin__header">
          <h1>Icon</h1>
          <h1>Admin Panel</h1>
          <h1>Email</h1>
        </div>

        <div className="Admin__middle">
          <h1>
            Categories______________________________________________________________________________
          </h1>
          <div className="Admin__add_category">
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Add category"
            ></input>
            <Button onClick={submit}>Add Category</Button>
          </div>
          <table>
            <tr></tr>
            {categoryData?.map(({ categoryId, data }) => (
              <tr key={categoryId}>
                <td>{data.name}</td>
                <td>
                  <Button className="update__button">Update</Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      deleteCategory(categoryId);
                    }}
                  >
                    Delete
                  </Button>
                </td>

                <td>
                  <Button onClick={addService}>Add Service</Button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      
        <div className="Admin__middleTwo">
          <h1>
            Services_______________________________________________________________________________
          </h1>
          <div className="Admin__add__service">
          <input type="text">
            
          </input>
        </div>
          <table>
            <tr></tr>
            {serviceData?.map(({ serviceId, data }) => (
              <tr key={serviceId}>
                <td>{data.title}</td>
                <td>
                  <Button>Update</Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      deleteService(serviceId);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    
    </div>
  );
}

export default Admin;
