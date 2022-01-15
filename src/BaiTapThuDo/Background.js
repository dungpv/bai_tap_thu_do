import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Background() {
  const typeThuDo = "background";
  const background = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderBackground = () => {
    return Object.entries(background).map(([item], index) => {
      if (background[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={background[item].imgSrc_jpg} />
              <h4>
                <b>{background[item].name}</b>
              </h4>
              <button className="btn btn-success">Thử đồ</button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-pane container fade" id="tabBackground">
      <div className="container">
        <div className="row">{renderBackground()}</div>
      </div>
    </div>
  );
}
