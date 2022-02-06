import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { db } from "./firebase";
import "./TaskerHomePage.css";
import { Button } from "@material-ui/core";

function TaskerHomePage() {
  const initialValues = { name: "", phone: "", service: "", city: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      db.collection("service_providers")
      .add({
        name: formValues.name,
        phone: formValues.phone,
        service: formValues.service,
        city: formValues.city,
      })
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (values.phone.length > 10) {
      errors.phone = "This is not a valid email format!";
    }
    if (!values.service) {
      errors.service = "service is required";
    }
    if (!values.city) {
      errors.city = "service is required";
    }
    return errors;
  };
  return (
    <div className="user__auth">
      <div className="user__container">
        <div className="left__image">
          <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"></img>
        </div>
        <div className="right">
          <div className="right__content">
            <h1>Job Details</h1>
            <form>
              <input
                name="name"
                type="text"
                autoComplete="nope"
                placeholder="Your name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p>{formErrors.city}</p>

              <input
                type="text"
                name="phone"
                placeholder="Your phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              <p>{formErrors.phone}</p>

              <input
                type="text"
                name="service"
                placeholder="Services you offer"
                value={formValues.service}
                onChange={handleChange}
              />
              <p>{formErrors.service}</p>

              <input
                type="text"
                name="city"
                placeholder="Your City"
                value={formValues.city}
                onChange={handleChange}
              />
              <p>{formErrors.city}</p>
            </form>
            <div className="submitbutton">
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="heading">
          <h1>Getting Started</h1>
        </div>
      </div>
    </div>
  );
}

export default TaskerHomePage;
