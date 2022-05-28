import React from 'react'
import './AdminPage.css';
import './AdminSidebar.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MdOutlineDashboard } from 'react-icons/md';
import AdminTaskers from './AdminTaskers';
function AdminSidebar() {
    const history = useHistory();
const newDivision = () => {
  <AdminTaskers/>
}
  return (
    <div className="adminPage__Left">
    <div className="adminPage__LeftDetails">
      <img src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
      <h1>Anand AS</h1>
    </div>
    <div className="LeftDetails__Two">

      <h4 onClick={() => history.push('/adminpage')}><MdOutlineDashboard/>Dashboard</h4>            
      <h4 onClick={() => history.push('/admincategory')}>Categories</h4>
      <h4 onClick={() => history.push('/adminallservices')}>Services</h4>
      <h4 onClick={() => history.push('/admintaskers')}>Taskers</h4>
      <h4>Reviews</h4>
      <h4 onClick={newDivision}>My Profile</h4>
    </div>
  </div>
  )
}

export default AdminSidebar