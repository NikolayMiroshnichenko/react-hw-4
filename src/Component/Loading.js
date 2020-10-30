import React from "react";
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = ({ error, timedOut, pastDelay, retry }) => {
  if (pastDelay) {
    return (
      <div className="overlay-spiner">
        <Spinner
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
  return null;
};

export default Loading;
