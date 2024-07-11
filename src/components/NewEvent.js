import React from "react";
import { useNavigate } from "react-router-dom";

function NewEvent(props) {
  const { id, title, date, desc, img } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body px-5">
          <p className="text-center opacity-25">{date} | Leave a comment</p>
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text">
            {desc.length > 100 ? desc.slice(0, 100) + "..." : desc}
          </p>
          <button
            onClick={handleClick}
            className="btn btn-warning w-100 text-white fw-bold mt-auto"
          >
            XEM THÊM
          </button>
        </div>
      </div>
    </>
  );
}

export default NewEvent;
