import "./Hero.css";
import introVideo from "./assets/utsav-intro.mp4";

export default function Hero() {
  return (
    <div className="hero-video-container">
      <video
        className="hero-video"
        src={introVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay-text">
        UTSAV VASTHRA
      </div>
    </div>
  );
}
