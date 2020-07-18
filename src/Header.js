import React from 'react';
import logo from './resources/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            
            <Link to ='/'>
              <img className="header__logo" 
                src={logo}
                alt=""
              />
            </Link>
            
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
           
                <Link to="/login" className="header__link">
                  <div className="header__option">
                   <span className="header__optionLine1"> Hello! EmK</span>
                   <span className="header__optionLine2"> Sign In</span>
                  </div>     
                </Link>

               <Link to="/" className="header__link">
                 <div className="header__option">
                   <span className="header__optionLine1" > Returns</span>
                   <span className="header__optionLine2"> & Orders</span>
                  </div>     
                </Link>

                <Link to="/" className="header__link">
                  <div className="header__option">
                    <span  className="header__optionLine1"> Your</span>
                    <span className="header__optionLine2"> Prime</span>
                  </div>     
                </Link>

                <Link to="/checkout" className="header__link">
                  <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLine2  header__basketCount">0</span>
                  </div>
              </Link>
            </div>
        </nav>
    )
}

export default Header