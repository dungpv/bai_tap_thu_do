import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ThuDoItem from "./ThuDoItem";

export default function HairStyle() {
  const typeThuDo = "hairstyle";
  const hairStyle = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderHairStyle = () => {
    return Object.entries(hairStyle).map(([item], index) => {
      if (hairStyle[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <ThuDoItem thuDoItem={hairStyle[item]}></ThuDoItem>
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
