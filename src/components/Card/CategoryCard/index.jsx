import React from 'react'
import "./style.css"
import noImage from "./../../../assets/img/noImage.webp"

function CategoryCard({name, img,icon, categoryIcon}) {
  return (
    <>
        <div className='wrapper'>
            <img className="imgc" src={img || noImage} alt=''/>
            <div>
                <img className='iconc' src={icon || categoryIcon} alt="" />
                <p>{name || "Apartment"}</p>
                {/* <div>asdas</div> */}
            </div>
        </div>
    </>
  )
}

export default CategoryCard