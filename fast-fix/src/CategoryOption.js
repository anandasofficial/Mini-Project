import React from "react";
import './ServicePage.css';
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

function CategoryOption({name, id}) {
    const history = useHistory(); 
    const selectChannel = () => {
        if (id) {
            history.push(`/categories/${id}`)
        } else {
            history.push(name);
        }
    };
  return (
  <div className="searchPage">
    <div className="searchPage__info" onClick={selectChannel} >
      <Button variant="outlined">{name}</Button>

     
    </div>
  </div>
  )
}

export default CategoryOption;
