import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function VantaCardWrapper({ children }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff, // linije bele boje
        backgroundColor: 0xffffff, // pozadina bele karte
        points: 10.0,
        maxDistance: 20.0,
        spacing: 15.0,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative w-full max-w-[500px] mx-auto rounded-2xl"
    >
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default VantaCardWrapper;
