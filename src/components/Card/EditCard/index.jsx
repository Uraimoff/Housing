import React from "react";
import "./style.css";
import house from "./../../../assets/img/PHouse1.jpg";
import noImage from "./../../../assets/img/noImage.webp";
import edit from "./../../../assets/icons/svg/edit.svg";
import trash from "./../../../assets/icons/svg/trash.svg";

const EditCard = () => {
  return (
    <>
      <div className="mywrapper">
        <div className="headwrapper">
        <div className="imgWrapper">
          <img src={house || noImage} alt="" />
          <div className="Salelight">FEATURED</div>
          <div className="Sale">FOR SALE</div>
        </div>
        <div>

        <div>
          <div className="Apartment">
            <div className="name inline">
              {"New Apartment Nice Wiew" || "New Apartment Nice Wiew"}
            </div>
            <div className="txt inline">
              {"Brooklyn" ||
                // `${address}, ${city}, ${country}, ${category?.name}`
                "Brooklyn"}
            </div>
                </div>
          </div>
          <div className="prices">
            <p className="line">${"price" || 0}/mo,</p>
            <div className="price">${"salePrice" || 0}/mo</div>
          </div>
                </div>
        </div>

        <div className="argInfo">
          <p>30 December 2022</p>
          <p>Pending</p>
          <p>5933</p>
          <div className="edit">
            <div>
            <img src={edit} alt="" />
            </div>
            <div>
            <img src={trash} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCard;
