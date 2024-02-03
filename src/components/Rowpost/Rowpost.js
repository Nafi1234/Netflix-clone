import React, { useEffect, useState } from "react";

import "./Rowpost.css";
import Youtube from "react-youtube";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/const";

function Rowpost(props) {
  const [urlId, setUrlId] = useState("");
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setmovies(response.data.results);
    });
  });
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.lenght !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };
  return (
   // <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          ></img>
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
   // </div>
  );
}

export default Rowpost;
