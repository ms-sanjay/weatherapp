import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import windAnimation from "./assets/wind.json";

export default function WindIntro() {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {

      setShow(true);
      setTimeout(() => setFade(true), 4500);
      setTimeout(() => setShow(false), 4700);
  }, []);

  if (!show) return null;

  return (
    <div className={`wind-overlay ${fade ? "fade-out" : ""}`}>
      <Lottie animationData={windAnimation} loop={false} />
    </div>
  );
}
