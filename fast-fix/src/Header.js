import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                
                <h1>Fast Fix</h1>
               
            </div>

            <div className='header__right'>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Header