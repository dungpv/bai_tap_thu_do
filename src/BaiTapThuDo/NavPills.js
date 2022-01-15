import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function NavPills(props) {
  const navPills = useSelector((state) => state.BaiTapThuDoReducer.navPills);

  const renderNavPills = () => {
    return navPills.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <a
            className={`
            nav-link ${item.isActive ? "active" : ""} btn-default`}
            data-toggle="pill"
            href={`#${item.tabName}`}
          >
            {item.showName}
          </a>
        </li>
      );
    });
  };

  return (
    <div>
      <ul className="nav nav-pills">{renderNavPills()}</ul>
    </div>
  );
}
