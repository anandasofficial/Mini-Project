import { Button } from "@material-ui/core";
import React, {useState} from 'react'
import "./Banner.css";
function Banner() {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
          {showSearch && <h1>Anand AS</h1>}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton'>Search Dartes</Button>
      
      </div>
      <div className="banner_info">
        <h1>Hello Anand AS!</h1>
        <h5>Hey Bruh!</h5>
        <Button variant="outlined">Explore More</Button>
      </div>
    </div>
  );
}

export default Banner;
