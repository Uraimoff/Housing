import React from 'react'
import "./style.css"

function CategoryCard({name, img,categoryIcon}) {
  return (
    <>
        <div className='wrapper'>
            <img className="imgc" src={img} alt=''/>
            <div>
                <img className='iconc' src={categoryIcon} alt="" />
                <p>{name}</p>
            </div>
        </div>
    </>
  )
}

export default CategoryCard