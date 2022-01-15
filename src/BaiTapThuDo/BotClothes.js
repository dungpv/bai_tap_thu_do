import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ThuDoItem from "./ThuDoItem";

export default function BotClothes() {
  const typeThuDo = "botclothes";
  const botClothes = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderBotClothes = () => {
    return Object.entries(botClothes).map(([item], index) => {
      if (botClothes[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <ThuDoItem thuDoItem={botClothes[item]}></ThuDoItem>
          </div>
        );
      }
    });
  };

  return (
    <div className="tab-pane container fade" id="tabBotClothes">
      <div className="container">
        <div className="row">
          <div className="row">{renderBotClothes()}</div>
        </div>
      </div>
    </div>
  );
}
