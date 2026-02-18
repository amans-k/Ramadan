import { useState, useEffect } from "react";
import { getNextIftarTime, getTodayRoza } from "@/data/ramadanData";

const CrescentMoon = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 animate-float drop-shadow-[0_0_20px_hsl(42,62%,55%)]">
    <defs>
      <radialGradient id="moonGlow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="hsl(42, 70%, 70%)" />
        <stop offset="100%" stopColor="hsl(42, 62%, 55%)" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="35" fill="url(#moonGlow)" />
    <circle cx="62" cy="42" r="28" fill="hsl(220, 50%, 7%)" />
    <circle cx="30" cy="25" r="2" fill="hsl(42, 70%, 70%)" className="animate-twinkle" />
    <circle cx="75" cy="70" r="1.5" fill="hsl(42, 70%, 70%)" className="animate-twinkle" style={{ animationDelay: "0.5s" }} />
    <circle cx="20" cy="65" r="1" fill="hsl(42, 70%, 70%)" className="animate-twinkle" style={{ animationDelay: "1s" }} />
  </svg>
);

const Lantern = ({ delay = "0s", side = "left" }: { delay?: string; side?: string }) => (
  <svg viewBox="0 0 40 80" className={`w-10 h-20 md:w-14 md:h-28 animate-swing ${side === "right" ? "scale-x-[-1]" : ""}`} style={{ animationDelay: delay, transformOrigin: "top center" }}>
    <line x1="20" y1="0" x2="20" y2="15" stroke="hsl(42, 62%, 55%)" strokeWidth="1" />
    <path d="M12 15 Q20 12 28 15 L26 55 Q20 60 14 55 Z" fill="hsl(42, 62%, 55%)" fillOpacity="0.3" stroke="hsl(42, 62%, 55%)" strokeWidth="1" />
    <ellipse cx="20" cy="35" rx="4" ry="6" fill="hsl(42, 70%, 70%)" opacity="0.8">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </ellipse>
    <path d="M14 55 Q20 58 26 55 L25 60 Q20 63 15 60 Z" fill="hsl(42, 62%, 55%)" fillOpacity="0.5" />
  </svg>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [hasIftar, setHasIftar] = useState(false);

  useEffect(() => {
    const update = () => {
      const iftarTime = getNextIftarTime();
      if (!iftarTime) {
        setHasIftar(false);
        return;
      }
      setHasIftar(true);
      const diff = iftarTime.getTime() - Date.now();
      if (diff <= 0) {
        setHasIftar(false);
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const todayRoza = getTodayRoza();

  const FlipUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
      <div className="relative w-16 h-20 md:w-20 md:h-24 rounded-lg bg-muted border border-primary/30 gold-glow flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-primary/60">
        <span className="text-3xl md:text-4xl font-bold text-primary font-display animate-pulse-slow">
          {String(value).padStart(2, "0")}
        </span>
        <div className="absolute inset-x-0 top-1/2 h-px bg-primary/20" />
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider group-hover:text-primary transition-colors duration-300">{label}</span>
    </div>
  );

  return (
    <div className="text-center mt-8">
      {hasIftar && todayRoza ? (
        <>
          <p className="text-sm text-muted-foreground mb-3 animate-pulse">
            ⏳ Countdown to Iftar ({todayRoza.iftarTime})
          </p>
          <div className="flex gap-3 md:gap-4 justify-center">
            <FlipUnit value={timeLeft.hours} label="Hours" />
            <div className="flex items-center text-2xl text-primary font-bold pt-[-1rem] animate-blink">:</div>
            <FlipUnit value={timeLeft.minutes} label="Minutes" />
            <div className="flex items-center text-2xl text-primary font-bold pt-[-1rem] animate-blink">:</div>
            <FlipUnit value={timeLeft.seconds} label="Seconds"/>
          </div>
        </>
      ) : (
        <p className="text-primary/70 text-sm">
          🌙 Ramadan 2025: Feb 19 – Mar 20 •  Mumbai
        </p>
      )}
    </div>
  );
};

const HeroSection = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    "Ramadan Mubarak",
    "رمضان مبارک",
    "Blessed Ramadan",
    "Ramadan Kareem"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ramadan-navy/50 via-background to-background animate-gradient-shift" />
      
      {/* Floating particles overlay */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ramadan-gold rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative lanterns with improved animations */}
      <div className="absolute top-0 left-4 md:left-16 opacity-60 animate-float-slow">
        <Lantern delay="0s" side="left" />
      </div>
      <div className="absolute top-0 right-4 md:right-16 opacity-60 animate-float-slow" style={{ animationDelay: "1s" }}>
        <Lantern delay="1s" side="right" />
      </div>
      <div className="hidden md:block absolute top-0 left-36 opacity-40 animate-float-slow" style={{ animationDelay: "0.5s" }}>
        <Lantern delay="0.5s" side="left" />
      </div>
      <div className="hidden md:block absolute top-0 right-36 opacity-40 animate-float-slow" style={{ animationDelay: "1.5s" }}>
        <Lantern delay="1.5s" side="right" />
      </div>

      {/* Crescent Moon with glow effect */}
      <div className="relative animate-slide-down group">
        <div className="absolute inset-0 bg-ramadan-gold/20 blur-3xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-1000" />
        <CrescentMoon />
      </div>

      {/* Greeting with text morph effect */}
      <div className="mt-6 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gold-gradient leading-tight transition-all duration-500 hover:scale-105">
          {greetings[greetingIndex]}
        </h1>
        <p className="text-3xl md:text-5xl font-arabic text-primary/80 mt-3 animate-float-slow" dir="rtl">
          رمضان مبارک
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 font-light animate-fade-in">
          1446 AH • The Month of Mercy & Forgiveness
        </p>
      </div>

      {/* Location badge with pulse effect */}
      <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-primary/20 text-sm text-foreground/80 hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          📍 Mumbai, India
        </div>
      </div>

      {/* Countdown with improved animations */}
      <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <CountdownTimer />
      </div>

      {/* Scroll hint with bounce animation */}
      <div className="absolute bottom-8 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2 hover:border-primary/60 transition-colors duration-300">
          <div className="w-1.5 h-3 rounded-full bg-primary/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;