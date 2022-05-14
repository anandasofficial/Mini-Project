import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminCategory.css";
import "./AdminAddService.css";
import { db } from "./firebase";

import { useParams } from "react-router-dom";
import Category from "./Category";
function AdminAddService() {
  const { categoryId } = useParams();
  const [name, setName] = useState("");

  const [categoryData, setCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [serviceName, setServiceName] = useState("");
  useEffect(() => {
    db.collection("categories").onSnapshot((snapshot) => {
      setCategoryData(
        snapshot.docs.map((doc) => ({
          categoryId: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  useEffect(() => {
    if (categoryId) {
      db.collection("categories")
        .doc(categoryId)
        .onSnapshot((snapshot) => setCategoryName(snapshot.data()));
    }
  });


  const addService = () => {
    if (categoryId) {
      db.collection("categories")
      .doc(categoryId)
      .collection("services")
      .add({
        serviceName: serviceName,
      })
    }
    setServiceName("");
  }


  return (
    <div className="addService">
      <div className="adminPage__container">
        <AdminSidebar />
        <div className="adminPage__Right">
          <div className="Right__above">
            <h4 title="Dashboard">Dashboard</h4>
            <h4>Sign In</h4>
          </div>
          <div className="adminCategoryRight__below">
            <div className="Right__belowOneCategory">
              <div className="belowOneCategory__heading">
                <h4>Services</h4>
              </div>
              <div className="belowOneCategory__inputs">
                <div className="inputs__details">
                  <h1>      {categoryName?.name}
</h1>
                  <form>
                  <input
                      type="text"
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      placeholder="Add service name"
                    ></input>
                    <select
                      value={categoryId}
                      onChange={(e) => setServiceName(e.target.value)}
                    >
                      {categoryData?.map(({ categoryId, data }) => (
                        <option key={categoryId}>{data.name}</option>
                      ))}
                    </select>
                  </form>
                  <button onClick={addService}>Submit</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddService;
