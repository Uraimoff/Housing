import React from 'react'
import "./style.css"
// import House from "./../../assets/img/PHouse1.jpg"
// import avatar from "./../../assets/img/avatar.jpg"
import Like from "./../../assets/icons/svg/Like.svg"
import resize from "./../../assets/icons/svg/resize.svg"
import bath from "./../../assets/icons/svg/bath.svg"
import ruler from "./../../assets/icons/svg/ruler.svg"
import car from "./../../assets/icons/svg/car.svg"
import bed from "./../../assets/icons/svg/bed.svg"
import { Container } from './style'


function HousesCard({houseIMG, avatar,name, address, beds, baths, garages, squares, noPrice, price}) {
  return (
    <>
    <Container>
        <div className='houseWrapper'>
        <img className='HouseImg' src={houseIMG} alt="" />
        </div>
        <div className='relative'>
            <div className='avatar'>
                <img src={avatar} alt="" />
            </div>
            <div className='Salelight'>FEATURED</div>
            <div className='Sale'>FOR SALE</div>
            <div className='Apartment'>
                <div className='name'>{name}</div>
                <div className='txt'>{address}</div>
            </div>
            <div className='info'>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={bed}/>
                    <div className='txt'>{beds}</div>
                </div>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={bath}/>
                    <div className='txt'>{baths}</div>
                </div>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={car}/>
                    <div className='txt'>{garages}</div>
                </div>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={ruler}/>
                    <div className='txt'>{squares}</div>
                </div>
            </div>
            <div className='bottom'>
                <div className=''>
                    <p className='line'>{noPrice}</p>
                    <div className='price'>{price}</div>
                </div>
                <div className='btn'>
                    <img className='resizer' src={resize} alt="" />
                    <div className='LikeWraper'><img src={Like} alt="" /></div>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default HousesCard