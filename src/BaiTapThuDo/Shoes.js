import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Shoes() {
  const typeThuDo = "shoes";
  const shoes = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderShoes = () => {
    return Object.entries(shoes).map(([item], index) => {
      if (shoes[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={shoes[item].imgSrc_jpg} />
              <h4>
                <b>{shoes[item].name}</b>
              </h4>
              <button className="btn btn-success">Thử đồ</button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-pane container fade" id="tabShoes">
      <div className="container">
        <div className="row">{renderShoes()}</div>
      </div>
    </div>
  );
}
