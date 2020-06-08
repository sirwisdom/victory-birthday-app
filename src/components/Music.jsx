import React from "react";
import song1 from "../images/song.mp3";

export default function Music() {
  return (
    <>
      <div className="music-box">
        <audio className="music" controls preload="auto">
          <source src={song1} type="audio/mp3" />
          Sorry Your Browser does not support the music file format
        </audio>
      </div>
    </>
  );
}
