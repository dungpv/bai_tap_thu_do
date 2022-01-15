import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HandBags() {
  const typeThuDo = "handbags";
  const handBags = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderHandBags = () => {
    return Object.entries(handBags).map(([item], index) => {
      if (handBags[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={handBags[item].imgSrc_jpg} />
              <h4>
                <b>{handBags[item].name}</b>
              </h4>
              <button className="btn btn-success">Thử đồ</button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-pane container fade" id="tabHandBags">
      <div className="container">
        <div className="row">
          <div className="row">{renderHandBags()}</div>
        </div>
      </div>
    </div>
  );
}
