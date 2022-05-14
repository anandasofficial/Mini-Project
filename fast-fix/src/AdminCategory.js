import React, { useState, useEffect } from "react";
import "./AdminCategory.css";
import AdminSidebar from "./AdminSidebar";
import { Button } from "@material-ui/core";
import { db } from "./firebase";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function AdminCategory({id}) {
  const history = useHistory();
 const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [roomDetails, setRoomDetails] = useState("");
 useEffect(() => {
   if (categoryId) {
     db.collection("categories")
     .doc(categoryId)
     .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
   }
   db.collection("categories")
   .orderBy("name", "asc")
   .onSnapshot((snapshot) => 
   setCategoryData(
     snapshot.docs.map((doc) => ({
       categoryId: doc.id,
       data: doc.data(),
     }))
   )
   )
 }, [categoryId])


  const deleteCategory = (categoryId) => {

    if(window.confirm("Are you sure you want to delete this category?")) {
      db.collection("categories").doc(categoryId).delete();
    };
    }

   
    const submit = (e) => {
      e.preventDefault();
      db.collection("categories").add({
        name: categoryName,
      });
      setCategoryName("");
    };
    const addService = (categoryId) => {

    if (categoryId) {
      history.push(`/adminservice/${categoryId}`)

    }

      
    }
  return (
    <div className="adminPage">
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
                <h4>Categories</h4>
              </div>
              <div className="add__yourcategory">
                <form>
                  <input type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Add category"
                  title="Add category"
                  ></input>
                </form>
                <div className="addCategory__button"> <Button onClick={submit}>Add Category</Button></div>

              </div>
              <div className="belowOneCategory__below">
              <table>
               
                <tr></tr>
                {categoryData?.map(({ categoryId, data }) => (
              <tr key={categoryId}>
                <td>{data.name}</td>
                <td>{}</td>
                <td>
                  <Button className="Update__button">Update</Button>
                </td>
                <td>
                 <div className="delete__categorybutton"> <Button className="delete__Button" onClick={() => {
                    deleteCategory(categoryId);
                  }}>
                    Delete
                  </Button>
                  </div>
                </td>

                <td>

               <div className="service__Button"><Button onClick={() => {addService(categoryId);
              }}
              >Add Service</Button></div>   
                </td>
              </tr>
            ))}
              </table>
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCategory;
