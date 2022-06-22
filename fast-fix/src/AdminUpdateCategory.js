import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminCategory.css";
import "./AdminAddService.css";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase/app";
import { useParams } from "react-router-dom";
import Category from "./Category";
import { Button } from "@material-ui/core";
import { storage } from "./firebase";
function AdminUpdateCategory() {
  const history = useHistory();

  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [customersData, setCustomersData] = useState([]);
  const [name, setUpdatedCustomerName] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  useEffect(() => {
    if (categoryId) {
      db.collection("categories")
        .doc(categoryId)
        .onSnapshot((snapshot) => setCategoryName(snapshot.data()));
    }
  });

  useEffect(() => {
    db.collection("categories").onSnapshot((snapshot) => {
      setCustomersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  
  const updateData = (e) => {
    e.preventDefault();
    db.collection("categories").doc(categoryId).update({
      name: name,
    });
  
    setUpdatedCustomerName("");
  };
     

  
  return (
    <div className="addService">
      <div className="adminPage__container">
        <AdminSidebar />
        <div className="adminPage__Right">
          <div className="Right__above">
            <h4>
              <input type="text" placeholder="Search"></input>
            </h4>
            <h4>Sign In</h4>
          </div>
          <div className="adminCategoryRight__below">
            <div className="Right__belowOneCategory">
              <div className="belowOneCategory__heading">
                <h4>Update Category </h4>
              </div>
              <div className="belowOneCategory__inputs">
                <div className="inputs__details">
                  <h1> {categoryName?.name}</h1>

                  <form>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setUpdatedCustomerName(e.target.value)}
                      placeholder="Update category name"
                    ></input>

                    

                  </form>
                  <div className="inputs__detailsTwo">
                    <form>
                      {" "}
                     
                    </form>
                  </div>
<Button onClick={updateData}>Update Category</Button>
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateCategory;
