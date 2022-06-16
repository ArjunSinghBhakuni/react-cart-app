import React from "react";
import {   Link  } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <div className="homecss">
        <Link to='women'>
          <img
            className="imgof"
            src="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/13_Menswear/MW_CateoryBanners/SS21_MWCatBanners/Desktop/CAT-BANNERS-TAILORING-1_2x_20220309143734.jpg?imwidth=1180&imdensity=2"
          />
        </Link>
        <Link to='men'>
          <img
            className="imgof"
            src="https://media.istockphoto.com/photos/beauty-young-girl-outdoors-enjoying-nature-picture-id618553342?k=20&m=618553342&s=612x612&w=0&h=ykoKs8RS3DQTf5efK6yDShhZf9bQa4BtwGx4HRTouZ4="
          />
        </Link>
        <Link to='kids'>
          <img
            className="imgof"
            src="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_June/Kids_Homepage_KidsSS2_A_Desktop_2x_20220602102257.jpg?imwidth=1180&imdensity=2"
          />
        </Link>
        <Link to='kids'>
          <img
            className="imgof"
            src="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_June/Kids_Homepage_B_KidsSS2_Desktop_2x_20220602102256.jpg?imwidth=1180&imdensity=2"
          />
        </Link>
      </div>
    </div>
  );
};
