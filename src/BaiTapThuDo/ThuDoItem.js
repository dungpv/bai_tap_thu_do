import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BaiTapThuDoTypes, thu_do } from "../redux/types/BaiTapThuDoTypes";

export default function ThuDoItem(props) {
  const dispatch = useDispatch();
  const { thuDoItem } = props;

  return (
    <div className="card text-center">
      <img src={thuDoItem.imgSrc_jpg} />
      <h4>
        <b>{thuDoItem.name}</b>
      </h4>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({
            type: thu_do,
            loaiDo: thuDoItem.type,
            hinhAnh: thuDoItem.imgSrc_png,
          });
        }}
      >
        Thử đồ
      </button>
    </div>
  );
}
