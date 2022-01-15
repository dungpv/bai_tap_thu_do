import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Necklaces() {
  const typeThuDo = "necklaces";
  const necklaces = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderNecklaces = () => {
    return Object.entries(necklaces).map(([item], index) => {
      if (necklaces[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={necklaces[item].imgSrc_jpg} />
              <h4>
                <b>{necklaces[item].name}</b>
              </h4>
              <button className="btn btn-success">Thử đồ</button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-pane container fade" id="tabNecklaces">
      <div className="container">
        <div className="row">{renderNecklaces()}</div>
      </div>
    </div>
  );
}
