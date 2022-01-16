import React, { useState, useMeasure } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated, useEffect } from "react-spring";

export default function ModelChonDo(props) {
  const thuDoModel = useSelector(
    (state) => state.BaiTapThuDoReducer.thuDoModel
  );

  const renderModel = () => {
    return thuDoModel.map((item, index) => {
      return (
        <animated.div
          key={index}
          className={item.name}
          style={{
            width: item.width,
            height: item.height,
            background: `url(${item.hinhAnh}) ${
              item.name === "background" ? " no-repeat cover" : ""
            }`,
            position: item.position,
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            transform: `${item.transform}`,
            zIndex: item.zIndex,
            transitionDelay: "1s",
            transitionProperty: "background-color font-size transform color",
            transitionTimingFunction: "linear",
            transitionDuration: "1s",
          }}
        />
      );
    });
  };

  return (
    <div className="contain">
      <div className="body" />
      <div className="model" />
      {renderModel()}
    </div>
  );
}
