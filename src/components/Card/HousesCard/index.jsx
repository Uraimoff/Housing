import React from 'react'
import "./style.css"
// import House from "./../../assets/img/PHouse1.jpg"
import avatarL from "./../../../assets/img/avatar.jpg"
import Like from "./../../../assets/icons/svg/Like.svg"
import resize from "./../../../assets/icons/svg/resize.svg"
import bath from "./../../../assets/icons/svg/bath.svg"
import ruler from "./../../../assets/icons/svg/ruler.svg"
import car from "./../../../assets/icons/svg/car.svg"
import bed from "./../../../assets/icons/svg/bed.svg"
import noImage from "./../../../assets/img/noImage.webp"
import { Container } from './style'


function HousesCard({data}) {
    const {attachments, avatar, address, houseDetails, salePrice,room, price, city, country, description, category} = data
  return (
    <>
    <Container>
        <div className='houseWrapper'>
        <img className='HouseImg' src={attachments[0]?.imgPath === "string" ? noImage : attachments[0]?.imgPath} alt="" />
        </div>
        <div className='relative'>
            <div className='avatar'>
                <img src={avatar || avatarL} alt="" />
            </div>
            <div className='Salelight'>FEATURED</div>
            <div className='Sale'>FOR SALE</div>
            <div className='Apartment'>
                <div className='name inline'>{description || "New Apartment Nice Wiew"}</div>
                <div className='txt inline'>{`${address}, ${city}, ${country}, ${category?.name}` || "Brooklyn"}</div>
            </div>
            <div className='info'>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={bed}/>
                    <div className='txt'>Bed {houseDetails?.beds || 0} </div>
                </div>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={bath}/>
                    <div className='txt'>Bath {houseDetails?.bath || 0}</div>
                </div>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={car}/>
                    <div className='txt'>Garage {houseDetails?.garage || 0}</div>
                </div>
                <div className='infocat'>
                    <img className='imgsize'alt="" src={ruler}/>
                    <div className='txt'>{houseDetails?.area || 0} Sq Ft</div>
                </div>
            </div>
            <div className='bottom'>
                <div className=''>
                    <p className='line'>${price || 0}/mo,</p>
                    <div className='price'>${salePrice || 0}/mo</div>
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