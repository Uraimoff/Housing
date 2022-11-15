import React from 'react'
import "./style.css"
import noImage from "./../../../assets/img/noImage.webp"

function CategoryCard({name, img,categoryIcon}) {
  return (
    <>
        <div className='wrapper'>
            <img className="imgc" src={img || noImage} alt=''/>
            <div>
                <img className='iconc' src={categoryIcon || ""} alt="" />
                <p>{name || "Apartment"}</p>
            </div>
        </div>
    </>
  )
}

export default CategoryCard