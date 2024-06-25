"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 31.46744689402072,
  lng: 74.44996654626,
};

const handleMarkerClick = () => {
  const mapUrl =
    "https://www.google.com/maps/place/31%C2%B026'39.0%22N+74%C2%B012'03.7%22E/@31.4441667,74.1984529,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.4441667!4d74.2010278?coh=219815&entry=tts&g_ep=EgoyMDI0MDYyMy4wKgBIAVAD";
  window.open(mapUrl, "_blank");
};

const Map = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        console.log("mobile");
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dynamicContainerStyle = {
    width: "100%",
    height: isMobile ? "calc(140vh)" : "calc(50vh)",
  };

  return (
    <div className="w-full">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      >
        <GoogleMap
          mapContainerStyle={dynamicContainerStyle}
          center={center}
          zoom={14}
          options={{
            styles: [
              { stylers: [{ saturation: -100 }, { invert_lightness: true }] },
            ],
            disableDefaultUI: true,
            gestureHandling: "greedy",
            scrollwheel: false,
            zoomControl: true,
          }}
        >
          <Marker position={center} onClick={handleMarkerClick} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
