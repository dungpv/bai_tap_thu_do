import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ThuDoItem from "./ThuDoItem";

export default function Background() {
  const typeThuDo = "background";
  const background = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderBackground = () => {
    return Object.entries(background).map(([item], index) => {
      if (background[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <ThuDoItem thuDoItem={background[item]}></ThuDoItem>
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
