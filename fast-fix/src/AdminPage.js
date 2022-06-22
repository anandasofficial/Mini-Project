import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { auth, db } from "./firebase";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from '@material-ui/core';
import "./AdminViewService.css";
import "./AdminTaskers.css";
function AdminPage() {
  const [roomDetails, setRoomDetails] = useState("");

  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { serviceId } = useParams();

 

 useEffect(() => {
   if (serviceId) {
     db.collection("ServiceProviders")
     .doc(serviceId)
     .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
   }
   db.collection("services")
   .onSnapshot((snapshot) =>
   setServices (
     snapshot.docs.map((doc) => ({
       serviceId: doc.id,
       title: doc.data().title,
       description: doc.data().description,
       src: doc.data().src,
       price: doc.data().price,


     }))
   )
   )
 },[serviceId])
  const viewTasker = (taskerId) => {
    if(taskerId){
      history.push(`/bookservice/${taskerId}`);
    } else {
      console.log("");
    }
  };

  const deleteService = (serviceId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      db.collection("services").doc(serviceId).delete();
    }
  };
  const updateService = (serviceId) => {
    if (serviceId) {
      history.push(`/adminUpdateService/${serviceId}`);
    }
  };

  const history = useHistory();
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          db.collection("admin")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const user = GetCurrentUser();
  console.log(user);

  
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/adminlogin");
    });
  };
  return (
    <div className="adminPage">
      {user?.FullName}
      <div className="adminPage__container">
        <AdminSidebar user={user}  />
        <div className="adminPage__Right">
          <div className="Right__above">
            <h4>
              <input type="text" placeholder="Search"></input>
            </h4>
            {!user && (
              <>
                <h4>Sign In</h4>
              </>
            )}
            {user && (
              <>
                <h4 onClick={handleLogout}>Sign out</h4>
              </>
            )}
          </div>
          <div className="Right__middle">
            <div className="Right__middleOne">
              <h4>Total Sales Amount</h4>
              <h1>240K</h1>
              <h5>See all ></h5>
            </div>
            <div className="Right__middleOne">
              <h4>Total Categories</h4>
              <h1>54</h1>
              <h5>See all ></h5>
            </div>
            <div className="Right__middleOne">
              <h4>Total Services</h4>
              <h1>54</h1>
              <h5>See all ></h5>
            </div>
            <div className="Right__middleOne">
              <h4>Total Users</h4>
              <h1>54</h1>
              <h5>See all ></h5>
            </div>
          </div>
          <div className="Right__below">
            <div className="Right__belowOne">
            <table className="table__admin">
                    <tr>
                      <th>Profile</th>
                      <th>Service</th>
                      <th>Description</th>
                    </tr>
                    {services
                      .filter(({ title }) => {
                        if (searchTerm === "") {
                          return title;
                        } else if (
                          title
                            .toLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                        ) {
                          return title;
                        }
                      })
                      .map(({serviceId, title, price, src, description }) => (
                        <tr key={serviceId}>
                          <td>
                            <img src={src}></img>
                          </td>
                          <td onClick={() => {viewTasker(serviceId);}}
                        >{title}</td>
                          <td>{description}</td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))}
                  </table>
            </div>

            <div className="Right__belowTwo">
              <h1>One</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
