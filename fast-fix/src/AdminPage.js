import React from "react";
import "./AdminPage.css";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className="adminPage">
      <div className="adminPage__container">
      <AdminSidebar />
        <div className="adminPage__Right">
          <div className="Right__above">
            <h4>Dashboard</h4>
            <h4>Sign In</h4>
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
              <h1>One</h1>
            </div>
            <div className="Right__belowOne">
              <h1>One</h1>
            </div>
            <div className="Right__belowOne">
              <h1>One</h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
