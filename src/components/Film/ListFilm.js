import React from "react";
import FilmDetail from "./FilmDetail";
import filmsData from "../../data/ListOfFilms";
import { Row, Col } from "antd";
import "./Film.css";

const ListFilm = () => {
  return (
    <div className="film-list-container">
      <h2 className="heading">List of Films</h2>
      <Row gutter={[16, 16]}>
        {filmsData.map((film) => (
          <Col key={film.id} xs={24} sm={24} md={12} lg={8}>
            <div style={{ alignItems: "center" }}>
              <FilmDetail film={film} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListFilm;
