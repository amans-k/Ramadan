import { ramadanData } from "@/data/ramadanData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const DailyCards = () => {
  const getBadge = (day: typeof ramadanData[0]) => {
    switch (day.specialType) {
      case "laylatul-qadr":
        return <Badge className="bg-primary text-primary-foreground">✨ Laylat al-Qadr</Badge>;
      case "badr":
        return <Badge className="bg-secondary text-secondary-foreground">⚔️ Battle of Badr</Badge>;
      case "odd-night":
        return <Badge variant="outline" className="border-primary/40 text-primary">🌟 Odd Night</Badge>;
      case "last-10":
        return <Badge variant="outline" className="border-secondary/40 text-secondary">🕌 Last 10</Badge>;
      case "quran-revelation":
        return <Badge className="bg-primary text-primary-foreground">📖 Quran Revealed</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (d: string) => {
    const date = new Date(d + "T00:00:00");
    return date.toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" });
  };

  return (
    <section id="daily" className="relative z-10 px-4 py-20 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
          🤲 Daily Roza Details & Duas
        </h2>
        <p className="text-muted-foreground mt-2">Tap any day to see its significance and supplication</p>
        <div className="w-24 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {ramadanData.map((day) => (
          <AccordionItem
            key={day.roza}
            value={`roza-${day.roza}`}
            className={`rounded-xl border border-primary/10 bg-card px-4 overflow-hidden transition-all ${
              day.specialType === "laylatul-qadr" ? "gold-glow border-primary/30" : ""
            }`}
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3 text-left">
                <span className="text-lg font-bold text-primary font-display min-w-[3rem]">
                  #{day.roza}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-foreground">{formatDate(day.date)}</span>
                    {getBadge(day)}
                  </div>
                  <span className="text-xs text-muted-foreground">{day.hijriDate} • {day.dayOfWeek}</span>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-xs text-muted-foreground">Sehri {day.sehriTime}</div>
                  <div className="text-sm font-semibold text-primary">Iftar {day.iftarTime}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pb-4 space-y-4">
                {/* Times for mobile */}
                <div className="flex gap-4 sm:hidden text-sm">
                  <span>🌅 Sehri: <strong className="text-secondary">{day.sehriTime}</strong></span>
                  <span>🌇 Iftar: <strong className="text-primary">{day.iftarTime}</strong></span>
                </div>

                {/* Significance */}
                {day.significance && (
                  <div className="p-3 rounded-lg bg-muted/50 border border-primary/10">
                    <p className="text-sm text-foreground/90">⭐ {day.significance}</p>
                  </div>
                )}

                {/* Dua */}
                <div className="p-4 rounded-lg bg-muted/30 border border-primary/5">
                  <p className="text-right text-xl font-arabic text-primary leading-loose mb-2" dir="rtl">
                    {day.duaArabic}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    🤲 {day.duaEnglish}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground">
                  ⏱️ Fasting Duration: {day.fastingDuration}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default DailyCards;
