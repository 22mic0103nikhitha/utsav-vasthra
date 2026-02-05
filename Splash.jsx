import { useEffect } from "react";
import "./splash.css";
import splashImg from "./assets/splash.jpg";

export default function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // auto move to home
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={splashImg} alt="Utsav Vasthra Splash" />
    </div>
  );
}
