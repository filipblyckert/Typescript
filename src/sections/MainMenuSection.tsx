import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection: React.FC = () => {
  return (
    

<nav className='mainmenu container'>
        
        <NavLink className='Logo' to="/" end >Fixxo.</NavLink>
       

        <div className='menu-links'>  

                <NavLink className="menu-link"  to="/" end>Home</NavLink>
                <NavLink className="menu-link"  to="/categories" end>Categories</NavLink>
                <NavLink className="menu-link"  to="/products" end>Products</NavLink>
                <NavLink className="menu-link"  to="/contacts" end>Contacts</NavLink>
        </div>

        <div className='menu-icons'>
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" quantity={undefined}/>
            <MenuIcon link="/compare" icon="fa-regular fa-retweet" quantity={undefined}/>
            <MenuIcon quantity="3" link="/wishlist" icon="fa-regular fa-heart"/>
            <MenuIcon quantity="4" link="/shoppingcart" icon="fa-regular fa-bag-shopping"/>
        
        </div>
    </nav>
  )
}

export default MainMenuSection