import React, { useState } from "react";
import { Modal, Card, Button } from "antd";
import "./Film.css";

function FilmDetail(props) {
  const { Image, Title, Year, Nation, darkMode } = props.film; // Receive darkMode prop

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

  const cardStyle = {
    color: darkMode ? "#fff" : "#000",
    width: 300,
    margin: "0 auto",
    background: darkMode ? "#333" : "#fff", // Adjust card background based on darkMode
  };

  const cardCoverStyle = {
    filter: darkMode ? "invert(1)" : "invert(0)", // Invert image colors for dark mode
  };

  return (
    <>
      <Card
        hoverable
        style={cardStyle}
        cover={
          <img
            className="list-image"
            alt={Title}
            src={Image}
            style={cardCoverStyle}
          />
        }
      >
        <Card.Meta
          title={Title}
          description={`Year: ${Year}, Nation: ${Nation}`}
        />
        <Button className="btn" onClick={showModal}>
          Detail
        </Button>{" "}
        {/* Add this button */}
      </Card>

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
    </>
  );
}

export default FilmDetail;
