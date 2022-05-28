import React, { useState, useEffect } from "react";
import "./AdminCategory.css";
import "./AdminUpdateCategory.css";
import "./AdminAddService.css";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import { Button } from "@material-ui/core";
function AdminUpdateCategory() {
  const history = useHistory();

  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState([]);
const [updateCategoryName, setUpdateCategoryName] = useState("");
  const [category, setCategory] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  useEffect(() => {
    db.collection("categories").onSnapshot((snapshot) => {
      setCategoryData(
        snapshot.docs.map((doc) => ({
          categoryId: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);
  useEffect(() => {
    if (categoryId) {
      db.collection("categories")
        .doc(categoryId)
        .onSnapshot((snapshot) => setCategory(snapshot.data()));
    }
  });

 
  return (
    <div className="adminPage">
      {categoryId}
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
                <h4> Update Category</h4>
              </div>
              <div className="belowOneCategory__inputs">
                <div className="inputs__details">
                  <h1>{categoryData?.name}</h1>
                  <form>
                    <input type="text"
                    value={updateCategoryName}
                    onChange={(e) => setUpdateCategoryName(e.target.value)}
                    >

                    </input>
                  </form>
                </div>
<Button>Update </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateCategory;
