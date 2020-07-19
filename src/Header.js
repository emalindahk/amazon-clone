import React from 'react';
import logo from './resources/logo.png';
import './stylesheets/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
  const [{ basket , user }] = useStateValue();

  const login = () => {
    if(user){
      auth.signOut(); 
    }
  }

  console.log(basket)
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
           
                <Link to={!user && "/login" }className="header__link">
                  <div onClick={login} className="header__option">
                   <span className="header__optionLine1"> Hello  {user?.email}</span>
                   <span className="header__optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
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
                    <span className="header__optionLine2  header__basketCount">
                      {basket?.length}
                      </span>
                  </div>
              </Link>
            </div>
        </nav>
    )
}

export default Header
