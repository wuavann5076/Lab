import React, { useState } from "react";
import { Modal } from "antd";

function FilmDetail(props) {
  const { Image, Title, Year, Nation } = props.film;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div className="film-detail" onClick={showModal}>
        <img className="film-image" src={Image} alt={Title} />
        <h3 className="film-title">{Title}</h3>
        <p className="film-info">Year: {Year}</p>
        <p className="film-info">Nation: {Nation}</p>
      </div>
      <Modal
        style={{
          top: 20,
        }}
        title={Title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
        onClick={handleModalClick}
      >
        <div className="modal-content">
          <img className="modal-image" src={Image} alt={Title} />
          <p className="modal-info">Year: {Year}</p>
          <p className="modal-info">Nation: {Nation}</p>
        </div>
      </Modal>
    </div>
  );
}

export default FilmDetail;
