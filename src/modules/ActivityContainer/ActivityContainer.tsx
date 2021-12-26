import { WishCard } from "./components/WishCard";

import wishTest from "../../assets/wishTest.svg";

import "./container.scss";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";

export const ActivityContainer = function () {
  const [openModal, setOpenModal] = useState(false);

  const handlerOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handlerClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="activity-container">
      <div className="card-container">
        <WishCard costLevel={1} name="default image" />
        <WishCard
          imgSrc={wishTest}
          costLevel={3}
          name="with image and loooooooooooong text"
        />
        <button onClick={handlerOpenModal}>click here</button>
        {openModal && <Modal handlerClose={handlerClose} />}
      </div>
    </div>
  );
};
