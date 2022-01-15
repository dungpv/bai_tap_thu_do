import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TopClothes(props) {
  const typeThuDo = "topclothes";
  const topClothes = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderTopClothes = () => {
    return Object.entries(topClothes).map(([item], index) => {
      if (topClothes[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={topClothes[item].imgSrc_jpg} />
              <h4>
                <b>{topClothes[item].name}</b>
              </h4>
              <button className="btn btn-success">Thử đồ</button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-pane container active" id="tabTopClothes">
      <div className="container">
        <div className="row">{renderTopClothes()}</div>
      </div>
    </div>
  );
}
