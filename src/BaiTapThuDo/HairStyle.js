import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HairStyle() {
  const typeThuDo = "hairstyle";
  const hairStyle = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderHairStyle = () => {
    return Object.entries(hairStyle).map(([item], index) => {
      if (hairStyle[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={hairStyle[item].imgSrc_jpg} />
              <h4>
                <b>{hairStyle[item].name}</b>
              </h4>
              <button className="btn btn-success">Thử đồ</button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-pane container fade" id="tabHairStyle">
      <div className="container">
        <div className="row">{renderHairStyle()}</div>
      </div>
    </div>
  );
}
