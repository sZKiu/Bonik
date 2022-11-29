import React from 'react';
import { Link } from "react-router-dom"

function CategoryHeader() {
  return (
    <div className='header_category' >
      <div className="header_category-pages" >
        <Link to="/" >Home</Link>
        <span>Pages</span>
        <span>Track My Order</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default CategoryHeader