import React from "react";

const ExcerciseVideo = (props) => {
  const { data } = props;
  console.log(data);
  const Video = data?.slice(0, 8)?.map((item, index) => {
    return (
      <div className="video">
        <a
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
          key={index}
        >
          <div className="video-thumbnail" data-content={item.video.title}>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          </div>
        </a>
      </div>
    );
  });

  return Video;
};

export default ExcerciseVideo;
