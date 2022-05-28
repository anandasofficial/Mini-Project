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
function AdminAddService() {
  const history = useHistory();

  const { categoryId } = useParams();
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [title, setServiceName] = useState("");
  const [price, setServicePrice] = useState("");
  const [description, setServiceDescription] = useState("");
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

    }
  };
  
  
     
  console.log("image", image);
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
  const viewService = (categoryId) => {
    if (categoryId) {
      history.push(`/adminviewservice/${categoryId}`);
    }
  };
  const addService = () => {
    if (categoryId) {
    
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
       
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      )
      db.collection("services").add({
        title: title,
        price: price,
        description: description,
        src: url,
      });

      db.collection("categories").doc(categoryId).collection("services").add({
        title: title,
        price: price,
        description: description,
        src: url,
      });
    }
    setServiceName("");
    setServicePrice("");
    setServiceDescription("");
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
                <h4>Add Service </h4>
              </div>
              <div className="belowOneCategory__inputs">
                <div className="inputs__details">
                  <h1> {categoryName?.name}</h1>

                  <form>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setServiceName(e.target.value)}
                      placeholder="Add service name"
                    ></input>

                    

                    <input type="file" onChange={handleChange}></input>
                    <select
                      value={categoryId}
                      onChange={(e) => setServiceName(e.target.value)}
                    >
                      {categoryData?.map(({ categoryId, data }) => (
                        <option key={categoryId}>{data.name}</option>
                      ))}
                    </select>
                  </form>
                  <div className="inputs__detailsTwo">
                    <form>
                      {" "}
                      <input
                        type="text"
                        value={description}
                        onChange={(e) => setServiceDescription(e.target.value)}
                        placeholder="Add service description"
                      ></input>
                    </form>
                  </div>
<Button onClick={addService}>Add Service</Button>
                
                  <Button
                    onClick={() => {
                      viewService(categoryId);
                    }}
                  >
                    View All Services
                  </Button>
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
