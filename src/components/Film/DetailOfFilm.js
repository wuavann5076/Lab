import React from "react";
import { useParams } from "react-router-dom";
import films from "../../data/ListOfFilms";
import "./DetailOfFilm.css"; // Import your CSS for styling
import FilmClip from "./FilmClip";

const DetailOfFilm = () => {
  const { id } = useParams();
  const film = films.find((film) => film.id === parseInt(id));

  if (!film) {
    return (
      <div className="film-detail-container">
        <div className="film-not-found">Film not found</div>
      </div>
    );
  }

  return (
    <div className="film-detail-container">
      <div className="film-info-part">
        <div className="film-images">
          <img src={film.Image} alt={film.Title} className="film-poster" />
        </div>
        <div className="film-details">
          <h1 className="film-title">{film.Title}</h1>
          <p className="film-info">Year: {film.Year}</p>
          <p className="film-info">Nation: {film.Nation}</p>
          <p className="film-info">Description: {film.Description}</p>
        </div>
      </div>
      <div className="film-video-part">
        <FilmClip videoUrl={film.VideoUrl} />
      </div>
    </div>
  );
};

export default DetailOfFilm;
