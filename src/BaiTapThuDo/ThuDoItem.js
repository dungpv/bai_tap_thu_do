import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thu_do } from "../redux/types/BaiTapThuDoTypes";
import { useSpring, animated } from "react-spring";

export default function ThuDoItem(props) {
  const dispatch = useDispatch();
  const { thuDoItem } = props;

  const [scaleAnim, setAnimation] = useState(true);
  const { propsAnim } = useSpring({
    from: { propsAnim: 0 },
    propsAnim: scaleAnim ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div className="card text-center">
      <animated.img
        src={thuDoItem.imgSrc_jpg}
        style={{
          scale: propsAnim.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      />
      <h4>
        <b>{thuDoItem.name}</b>
      </h4>
      <animated.button
        className="btn btn-success"
        style={{
          scale: propsAnim.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.2, 1.1, 1],
          }),
        }}
        onClick={() => {
          setAnimation(!scaleAnim);
          dispatch({
            type: thu_do,
            loaiDo: thuDoItem.type,
            hinhAnh: thuDoItem.imgSrc_png,
          });
        }}
      >
        Thử đồ
      </animated.button>
    </div>
  );
}
