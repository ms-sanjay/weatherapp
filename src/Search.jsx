import Lottie from "lottie-react";
import windAnimation from "./assets/flow.json";
import { useState } from "react";
export default function WindIntro({ show, fade }) {
    return (
        <>
        {show && (  
        <div className={`wind-overlay ${fade ? "fade-out" : ""}`}>
          <Lottie animationData={windAnimation} loop={false} />
        </div>
        )}
        </>
    );
}