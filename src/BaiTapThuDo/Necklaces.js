import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ThuDoItem from "./ThuDoItem";

export default function Necklaces() {
  const typeThuDo = "necklaces";
  const necklaces = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderNecklaces = () => {
    return Object.entries(necklaces).map(([item], index) => {
      if (necklaces[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <ThuDoItem thuDoItem={necklaces[item]}></ThuDoItem>
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
