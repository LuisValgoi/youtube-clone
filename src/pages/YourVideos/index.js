import React, { useEffect } from "react";

export default function YourVideos() {
  useEffect(() => {
    window.open("https://studio.youtube.com/channel/userId", "_self");
  }, []);

  return <div style={{ color: "white" }}>Redirecting...</div>;
}
