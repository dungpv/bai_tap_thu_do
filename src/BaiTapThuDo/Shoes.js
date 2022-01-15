import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ThuDoItem from "./ThuDoItem";

export default function Shoes() {
  const typeThuDo = "shoes";
  const shoes = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderShoes = () => {
    return Object.entries(shoes).map(([item], index) => {
      if (shoes[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <ThuDoItem thuDoItem={shoes[item]}></ThuDoItem>
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
