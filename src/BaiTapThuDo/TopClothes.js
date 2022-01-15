import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ThuDoItem from "./ThuDoItem";

export default function TopClothes(props) {
  const typeThuDo = "topclothes";
  const topClothes = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderTopClothes = () => {
    return Object.entries(topClothes).map(([item], index) => {
      if (topClothes[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <ThuDoItem thuDoItem={topClothes[item]}></ThuDoItem>
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
