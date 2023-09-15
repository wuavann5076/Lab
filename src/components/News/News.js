import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";
import films from "../../data/ListOfFilms";
import "./News.css";
const { Meta } = Card;

const News = () => {
  return (
    <div className="news-container">
      <h1>Latest Films</h1>
      <div style={{ height: "80vh", overflow: "auto" }}>
        <Row gutter={16}>
          {films.map((film) => (
            <Col xs={24} sm={24} md={12} lg={8} key={film.id}>
              <Link to={`/films/${film.id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={film.Title}
                      src={film.Image}
                      style={{ height: "400px", width: "300px" }}
                    />
                  }
                  style={{ width: "300px", marginBottom: "20px" }}
                >
                  <Meta title={film.Title} description={`Year: ${film.Year}`} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default News;
