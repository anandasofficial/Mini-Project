import React, { useState, useEffect } from "react";
import "./TaskerHomePage.css";
import { auth, db, storage } from "./firebase";
import { useStateValue } from "./StateProvider";
import TaskerLogin from "./TaskerLogin";
import { useParams } from 'react-router-dom';
function Sample({ categoryId }) {
  const { roomId } = useParams();
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_TASKER",
          tasker: authUser,
        });
      } else {
        dispatch({
          type: "SET_TASKER",
          tasker: null,
        });
      }
    })
  }, []);
  const initialValues = {
    options: "",
    src: "",
    name: "",
    phone: "",
    service: "",
    city: "",
    price: "",
  };
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


      db.collection("ServiceProviders").add({
        src: formValues.src,
        name: formValues.name,
        phone: formValues.phone,
        service: formValues.service,
        city: formValues.city,
        price: formValues.price,
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
      errors.phone = "Phone number must be 10 digits!";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!values.service) {
      errors.service = "service is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.price) {
      errors.price = "price is required";
    }
    if (!values.src){
      errors.src = "Image url is required";
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
              Find local jobs that fit your skills and schedule. With FastFix,
              you have the freedom and support to be your own boss.
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
                type="number"
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
              <h5>Price</h5>
              <input
                type="text"
                name="price"
                value={formValues.price}
                onChange={handleChange}
              />
              <p>{formErrors.price}</p>
                
                <h5>Enter your image url</h5>

                <input
                  type="file"
                  name="src"
                  value={formValues.src}
                  onChange={handleChange}
                    
                  
                />
              
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
