"use client";

import { useEffect, useState } from "react";

export default function FooterMeta() {
  const [time, setTime] = useState<string>("");
  const [temp, setTemp] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. GESTION DE L'HEURE
    const updateTime = () => {
      const now = new Date();
      // Force l'heure de Paris/France
      const timeString = now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Paris",
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Met à jour chaque seconde

    // 2. GESTION DE LA MÉTÉO (API Open-Meteo Gratuite)
    // Coordonnées d'Orléans (47.90, 1.90). Change-les si tu bouges !
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=47.9029&longitude=1.9038&current_weather=true"
        );
        const data = await res.json();
        setTemp(Math.round(data.current_weather.temperature));
      } catch (error) {
        console.error("Erreur météo", error);
      }
    };

    fetchWeather();

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Évite les erreurs d'hydratation Next.js

  return (
    <div className="absolute bottom-6 right-6 z-50 flex items-center gap-4 font-switzer text-md sm:text-md font-medium uppercase tracking-widest text-zinc-500 mix-blend-difference animate-fade-in">
      
      {/* VILLE */}
      <span className="inline-block hover:text-white transition-colors cursor-default">
        Orléans, FR
      </span>


      {/* MÉTÉO */}
      {temp !== null && (
        <span className="hover:text-white transition-colors cursor-default">
          {temp}°C
        </span>
      )}

      {/* HEURE */}
      <span className="tabular-nums hover:text-white transition-colors cursor-default w-[4ch] text-right">
        {time}
      </span>
    </div>
  );
}