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
function AdminUpdateService() {
  const history = useHistory();
 const [service, setService] = useState("");
 const [serviceName, setServiceName] = useState("");
 const [serviceData, setServiceData] = useState([]);
 const [title, setUpdatedServiceName] = useState("");
 const [description, setUpdatedServiceDescription] = useState("");
 const [src, setUpdatedServiceImage] = useState(null);
 const [error, setError] = useState(''); const { serviceId } = useParams();
 const types = ['image/png', 'image/jpeg']; 

 const productImgHandler = (e) => {
  let selectedFile = e.target.files[0];
  if (selectedFile && types.includes(selectedFile.type)) {
      setUpdatedServiceImage(selectedFile);
      setError('')
  }
  else {
      setUpdatedServiceImage(null);
      setError('Please select a valid image type (jpg or png)');
  }
}
  
 
  
  const updateService = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`product-images/${src.name}`).put(src);
    uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
    }, err => setError(err.message)
        , () => {
            storage.ref('product-images').child(src.name).getDownloadURL().then(url => {
                db.collection('services')
                .doc(serviceId)

                .update({
                    title: title,
                    description: description,
                    src: url
                }).then(() => {
                    setUpdatedServiceName('');
                    setUpdatedServiceDescription("");
                    setUpdatedServiceImage('');
                    setError('');
                    document.getElementById('file').value = '';
                }).catch(err => setError(err.message))
            })
        })
}

useEffect(() => {
  if (serviceId) {
    db.collection("services")
      .doc(serviceId)
      .onSnapshot((snapshot) => setServiceName(snapshot.data()));
  }
});

useEffect(() => {
  db.collection("categories").onSnapshot((snapshot) => {
    setServiceData(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  });
}, []); 
           
      

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
                {serviceId}
              </div>
              <div className="belowOneCategory__inputs">
                <div className="inputs__details">
                  <h1> {serviceName?.title}</h1>

                  <form>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setUpdatedServiceName(e.target.value)}
                      placeholder="Update service name"
                    ></input>

                    

                    <input type="file" onChange={productImgHandler}></input>
                  
                  </form>
                  <div className="inputs__detailsTwo">
                    <form>
                      {" "}
                      <input
                        type="text"
                        value={description}
                        onChange={(e) => setUpdatedServiceDescription(e.target.value)}
                        placeholder="Add service description"
                      ></input>
                    </form>
                  </div>
<Button onClick={updateService}>Update Service</Button>
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateService;
