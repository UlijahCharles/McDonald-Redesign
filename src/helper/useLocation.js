import React, { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const fetchUserLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError(err.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 } // Optional position options
    );
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  return { location, error, fetchUserLocation };
};

export default useLocation;
