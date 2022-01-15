import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ModelChonDo(props) {
  const thuDoModel = useSelector(
    (state) => state.BaiTapThuDoReducer.thuDoModel
  );

  const renderModel = () => {
    return thuDoModel.map((item, index) => {
      return (
        <div
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
            transform: item.transform,
            zIndex: item.zIndex,
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
      {/* <div
        className="hairstyle"
        style={{
          width: 1000,
          height: 1000,
          background: 'url("./images/hairstyle/hairstyle3.png")',
          position: "absolute",
          top: "-75%",
          right: "-57%",
          transform: "scale(0.15)",
          zIndex: 4,
        }}
      />
      <div
        className="necklace"
        style={{
          width: 500,
          height: 1000,
          background: 'url("./images/necklaces/necklace3.png")',
          position: "absolute",
          bottom: "-40%",
          right: "-3.5%",
          transform: "scale(0.5)",
          zIndex: 4,
        }}
      />
      <div
        className="bikinitop"
        style={{
          width: 500,
          height: 500,
          background: 'url("./images/clothes/topcloth5.png")',
          position: "absolute",
          top: "-9%",
          left: "-5%",
          zIndex: 3,
          transform: "scale(0.5)",
        }}
      />
      <div
        className="bikinibottom"
        style={{
          width: 500,
          height: 1000,
          background: 'url("./images/clothes/botcloth4.png")',
          position: "absolute",
          top: "-30%",
          left: "-5%",
          zIndex: 2,
          transform: "scale(0.5)",
        }}
      />
      <div
        className="handbag"
        style={{
          width: 500,
          height: 1000,
          background: 'url("./images/handbags/handbag2.png")',
          position: "absolute",
          bottom: "-40%",
          right: "-3.5%",
          transform: "scale(0.5)",
          zIndex: 4,
        }}
      />
      <div
        className="feet"
        style={{
          width: 500,
          height: 1000,
          background: 'url("./images/shoes/shoes2.png")',
          position: "absolute",
          bottom: "-37%",
          right: "-3.5%",
          transform: "scale(0.5)",
          zIndex: 1,
        }}
      />
      <div
        className="background"
        style={{
          backgroundImage: 'url("./images/background/background1.jpg")',
        }}
      /> */}
    </div>
  );
}
