import { thu_do } from "../types/BaiTapThuDoTypes";

export const thuDoAction = (loaiDo, hinhAnh) => ({
  type: thu_do,
  loaiDo,
  hinhAnh,
});
