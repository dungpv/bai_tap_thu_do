import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function BotClothes() {
  const typeThuDo = "botclothes";
  const botClothes = useSelector((state) => state.BaiTapThuDoReducer.tabPanes);

  const renderBotClothes = () => {
    return Object.entries(botClothes).map(([item], index) => {
      if (botClothes[item].type === typeThuDo) {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={botClothes[item].imgSrc_jpg} />
              <h4>
                <b>{botClothes[item].name}</b>
              </h4>
              <button className="btn btn-success">Thử đồ</button>
            </div>
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
