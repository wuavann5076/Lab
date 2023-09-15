import React from "react";

const FilmClip = ({ videoUrl }) => {
  return (
    <div className="film-clip">
      <iframe
        title="Film Trailer"
        width="560"
        height="315"
        src={videoUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FilmClip;
