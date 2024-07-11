import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { News } from "../news";
import { BsArrowLeftCircle } from "react-icons/bs";

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const detail = News.find((item) => item.id === Number(id));

  return (
    <div className="px-5">
      <h2>{detail.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: detail.description }}></p>
      <hr />
      <span onClick={handleClick} className="btn-back fs-1">
        <BsArrowLeftCircle /> Back
      </span>
    </div>
  );
}

export default EventDetail;
