import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";
import { FC } from "react";
import { TUser } from "../../types/types";

type PropTypes = {
  item: TUser;
};

const Card: FC<PropTypes> = ({ item }) => {
  const nav = useNavigate();

  return (
    <>
      <div className="card-container">
        <div className="card-data">
          <p>
            ФИО: <span>{item.name}</span>
          </p>
          <p>
            город: <span>{item.address.city}</span>
          </p>
          <p>
            компания: <span>{item.company.name}</span>
          </p>
        </div>
        <button onClick={() => nav(`/user/${item.id}`)}>Подробнее</button>
      </div>
    </>
  );
};

export default Card;
