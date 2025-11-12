import React from "react";

interface YouTubePlaylistProps {
  playlistId: string;
  width?: number;
  height?: number;
  controls?: boolean;
}

const YouTubePlaylist: React.FC<YouTubePlaylistProps> = ({
  playlistId,
  width = 560,
  height = 315,
  controls = true,
}) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/videoseries?list=${"CAlRRAnOlaI"}&controls=${controls ? 1 : 0}`}
      title="YouTube Playlist Player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubePlaylist;
