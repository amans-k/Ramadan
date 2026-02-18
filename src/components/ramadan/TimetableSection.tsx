import { useState } from "react";
import { ramadanData, getTodayRoza } from "@/data/ramadanData";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const TimetableSection = () => {
  const [view, setView] = useState<"table" | "cards">("table");
  const todayRoza = getTodayRoza();
  const todayIndex = todayRoza ? todayRoza.roza : -1;

  const getRowClass = (day: typeof ramadanData[0]) => {
    const classes: string[] = [];
    if (day.roza === todayIndex) classes.push("bg-primary/10 border-primary/30");
    if (day.specialType === "laylatul-qadr") classes.push("bg-primary/15 gold-glow-intense");
    if (day.specialType === "odd-night") classes.push("bg-primary/5");
    if (day.specialType === "badr") classes.push("bg-secondary/10");
    return classes.join(" ");
  };

  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00");
    return date.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
  };

  return (
    <section id="timetable" className="relative z-10 px-4 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
          📅 Ramadan 2026 Timetable
        </h2>
        <p className="text-muted-foreground mt-2">Sehri & Iftar times for  Mumbai</p>
        <div className="w-24 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
      </div>

      {/* View toggle */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setView("table")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === "table" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
        >
          📊 Table View
        </button>
        <button
          onClick={() => setView("cards")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === "cards" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
        >
          🃏 Card View
        </button>
      </div>

      {view === "table" ? (
        <div className="rounded-xl border border-primary/10 overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 border-b border-primary/10">
                <TableHead className="text-primary font-display">#</TableHead>
                <TableHead className="text-primary font-display">Date</TableHead>
                <TableHead className="text-primary font-display hidden md:table-cell">Day</TableHead>
                <TableHead className="text-primary font-display hidden lg:table-cell">Hijri</TableHead>
                <TableHead className="text-primary font-display">🌅 Sehri</TableHead>
                <TableHead className="text-primary font-display">🌇 Iftar</TableHead>
                <TableHead className="text-primary font-display hidden md:table-cell">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ramadanData.map((day) => (
                <TableRow key={day.roza} className={`border-b border-border/50 transition-all hover:bg-muted/30 ${getRowClass(day)}`}>
                  <TableCell className="font-bold text-primary">
                    {day.roza}
                    {day.specialType === "laylatul-qadr" && " ✨"}
                    {day.roza === todayIndex && " 📍"}
                  </TableCell>
                  <TableCell className="font-medium">{formatDate(day.date)}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{day.dayOfWeek}</TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground text-xs">{day.hijriDate}</TableCell>
                  <TableCell className="font-semibold text-secondary">{day.sehriTime}</TableCell>
                  <TableCell className="font-semibold text-primary">{day.iftarTime}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{day.fastingDuration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ramadanData.map((day) => (
            <div
              key={day.roza}
              className={`p-4 rounded-xl border border-primary/10 bg-card transition-all hover:border-primary/30 ${getRowClass(day)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-primary font-display">
                  Roza {day.roza} {day.specialType === "laylatul-qadr" && "✨"}
                </span>
                <span className="text-xs text-muted-foreground">{day.dayOfWeek}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{formatDate(day.date)} • {day.hijriDate}</p>
              <div className="flex justify-between text-sm">
                <span>🌅 <span className="font-semibold text-secondary">{day.sehriTime}</span></span>
                <span>🌇 <span className="font-semibold text-primary">{day.iftarTime}</span></span>
                <span className="text-muted-foreground">{day.fastingDuration}</span>
              </div>
              {day.significance && (
                <p className="mt-2 text-xs text-primary/70 border-t border-primary/10 pt-2">{day.significance}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center mt-6 text-xs text-muted-foreground">
        <span>📍 Today</span>
        <span>✨ Laylat al-Qadr</span>
        <span className="text-secondary">🌟 Odd Nights</span>
        <span>⚔️ Battle of Badr</span>
      </div>
    </section>
  );
};

export default TimetableSection;
