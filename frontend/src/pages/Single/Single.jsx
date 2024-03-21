import React from "react";
import "./Single.css";
import Nature from "../../img/nature.jpg";
import Men from "../../img/men.jpg";
import Edit from "../../img/Edit.png";
import Delete from "../../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
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
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, rem!
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          aliquid voluptas impedit perferendis voluptatibus unde sequi omnis
          pariatur illum laudantium, cupiditate itaque nesciunt minima
          consequuntur animi voluptates deleniti aspernatur debitis doloremque
          voluptatum suscipit asperiores adipisci repellendus! Harum ipsa eius
          neque quia dolore, eos suscipit consectetur atque iure ducimus non
          illum tempora vel, natus, voluptatibus voluptates quam nihil culpa nam
          sunt. Deserunt corporis amet maiores accusamus magni esse distinctio,
          necessitatibus optio omnis, neque dolores repellendus, velit nobis. Ad
          similique distinctio illo!
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          aliquid voluptas impedit perferendis voluptatibus unde sequi omnis
          pariatur illum laudantium, cupiditate itaque nesciunt minima
          consequuntur animi voluptates deleniti aspernatur debitis doloremque
          voluptatum suscipit asperiores adipisci repellendus! Harum ipsa eius
          neque quia dolore, eos suscipit consectetur atque iure ducimus non
          illum tempora vel, natus, voluptatibus voluptates quam nihil culpa nam
          sunt. Deserunt corporis amet maiores accusamus magni esse distinctio,
          necessitatibus optio omnis, neque dolores repellendus, velit nobis. Ad
          similique distinctio illo!
        </p>
      </div>

      <Menu/>
    </div>
  );
};

export default Single;
