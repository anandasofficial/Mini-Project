import React, { useState, useEffect } from "react";
import "./Sample.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

function Sample({ categoryId }) {

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
    console.log(typeof categoryId);

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
     
     
        db.collection("ServiceProviders")
         

          .add({
            name: formValues.name,
            phone: formValues.phone,
            service: formValues.service,
            city: formValues.city,
          });
      
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!";
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
    <div className="sample">
      <h1>Share Your Skills</h1>

      <div className="sample__container">
        <div className="sample__heading"></div>
        <div className="sample__center">
          <div className="sample__centerLeft">
            <h1>Be your own boss</h1>
            <p>
            Find local jobs that fit your skills and schedule. With FastFix, you have the freedom and support to be your own boss.
            </p>
            <p>_________________________________________</p>
            <div className="sample__image"></div>
         
          </div>
          <div className="sample__centerRight">
            <h1>Tell us a little about yourself:</h1>
            <form>
              <h5>Enter your name</h5>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p>{formErrors.name}</p>

              <h5>Enter your phone</h5>
              <input
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              <p>{formErrors.phone}</p>

              <h5>Services you offer</h5>
              <input
                type="text"
                name="service"
                value={formValues.service}
                onChange={handleChange}
              />
              <p>{formErrors.service}</p>

              <h5>Your City</h5>
              <input
                type="text"
                name="city"
                value={formValues.city}
                onChange={handleChange}
              />
              <p>{formErrors.city}</p>
            </form>
            <div className="sample__button">
              <button type="submit" onClick={handleSubmit}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sample;
