import React from "react";
import "./Single.css";
import Nature from "../../img/nature.jpg";
import Men from "../../img/men.jpg";
import Edit from "../../img/Edit.png";
import Delete from "../../img/delete.png";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={Nature} alt="" />
        <div className="user">
          <img src={Men} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
           
          </div>
          <div className="edit">
              <img src={Edit} alt="" />
              <img src={Delete} alt="" />
            </div>
        </div>
      </div>

      <div className="menu">m</div>
    </div>
  );
};

export default Single;
