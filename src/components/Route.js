import { useEffect, useState } from "react";

export default function Route({ path, children }) {
  const [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentLocation(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentLocation === path ? children : null;
}
