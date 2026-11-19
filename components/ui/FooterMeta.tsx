"use client";

import { useEffect, useState } from "react";

/** Heure de Paris + température à Orléans (Open-Meteo), affichées en ligne. */
export default function FooterMeta() {
  const [time, setTime] = useState<string>("");
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 15_000);

    fetch("https://api.open-meteo.com/v1/forecast?latitude=47.9029&longitude=1.9038&current_weather=true")
      .then((res) => res.json())
      .then((data) => setTemp(Math.round(data.current_weather.temperature)))
      .catch(() => {});

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="tabular-nums">
      {time || "--:--"}
      {temp !== null && <> · {temp}°C</>}
    </span>
  );
}
