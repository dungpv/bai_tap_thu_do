import React from "react";
import BotClothes from "./BotClothes";
import NavPills from "./NavPills";
import TopClothes from "./TopClothes";
import Shoes from "./Shoes";
import HandBags from "./HandBags";
import Necklaces from "./Necklaces";
import HairStyle from "./HairStyle";
import Background from "./Background";
import ModelChonDo from "./ModelChonDo";
import "./style.css";
export default function BaiTapThuDo() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="text-center">
              <img src="./images/cybersoft.png" alt="Card image" />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">
                CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                - Virtual Dressing Room
              </h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <NavPills></NavPills>
          <div className="well">
            {/* Tab panes */}
            <div className="tab-content">
              {/* Áo */}
              <TopClothes></TopClothes>
              {/* Quần */}
              <BotClothes></BotClothes>
              {/* Giày */}
              <Shoes></Shoes>
              {/* Túi */}
              <HandBags></HandBags>
              {/* Vòng cổ */}
              <Necklaces></Necklaces>
              {/* Tóc */}
              <HairStyle></HairStyle>
              {/* Nền */}
              <Background></Background>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ModelChonDo></ModelChonDo>
        </div>
      </div>
    </div>
  );
}
