import React from 'react'
import { Link } from 'react-router-dom';
import {FaHome, } from 'react-icons/fa';

const Header = ({handleSearch,searchValue,setSearchValue,handleForm}) => {
  return (
    <header className="header">
            
            <h1>Food Recipe</h1>
            <Link  to="/" ><FaHome size="2em" /></Link>
            
            <form className="example" onSubmit={handleSearch} >
  <input type="text" placeholder="search for recipes..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
  <button type="submit" ><i className="fa fa-search"></i></button>
</form>
    <button className="forMe" onClick={handleForm} >For me</button>  
    </header>
  )
}

export default Header