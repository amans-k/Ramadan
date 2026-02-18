import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { getTodayRoza, ramadanData } from "@/data/ramadanData";

const ShareCard = () => {
  const todayRoza = getTodayRoza() || ramadanData[0];
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0a1628",
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `ramadan-roza-${todayRoza.roza}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (e) {
      console.error("Download failed", e);
    } finally {
      setDownloading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🌙 *Ramadan Mubarak* 🌙
      
📍 Mumbai, India
🗓️ Roza ${todayRoza.roza} of 30 — ${todayRoza.hijriDate}

🌅 Sehri: *${todayRoza.sehriTime}*
🌇 Iftar: *${todayRoza.iftarTime}*
⏱️ Fasting: ${todayRoza.fastingDuration}
${todayRoza.significance ? `⭐ ${todayRoza.significance}` : ''}

🤲 ${todayRoza.duaEnglish}

رمضان مبارک 🌙`
    );

    // Mobile detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // WhatsApp URL based on device
    const whatsappUrl = isMobile
      ? `whatsapp://send?text=${text}`  // Mobile app
      : `https://web.whatsapp.com/send?text=${text}`; // Web version
    
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Ramadan Timings',
          text: `Roza ${todayRoza.roza} - Sehri: ${todayRoza.sehriTime}, Iftar: ${todayRoza.iftarTime}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled', error);
      }
    } else {
      // Fallback to WhatsApp
      handleWhatsAppShare();
    }
  };

  return (
    <section id="share" className="relative z-10 px-4 py-20 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
          📱 Today's Schedule
        </h2>
        <p className="text-muted-foreground mt-2">Download & share with family and friends</p>
        <div className="w-24 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
      </div>

      {/* Shareable card */}
      <div
        ref={cardRef}
        className="p-8 rounded-2xl bg-gradient-to-br from-card via-card to-muted border border-primary/20 gold-glow text-center"
      >
        <p className="text-sm text-muted-foreground mb-2">📍 Mumbai, India</p>
        <h3 className="text-3xl font-display font-bold text-gold-gradient mb-1">
          🌙 Ramadan Mubarak
        </h3>
        <p className="text-lg font-arabic text-primary/80 mb-4" dir="rtl">رمضان مبارک</p>

        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Roza {todayRoza.roza} of 30 • {todayRoza.hijriDate}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-muted/50 border border-secondary/20">
            <p className="text-xs text-muted-foreground mb-1">🌅 Sehri</p>
            <p className="text-2xl font-bold text-secondary font-display">{todayRoza.sehriTime}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-primary/20">
            <p className="text-xs text-muted-foreground mb-1">🌇 Iftar</p>
            <p className="text-2xl font-bold text-primary font-display">{todayRoza.iftarTime}</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          {new Date(todayRoza.date + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
          {" • "}⏱️ {todayRoza.fastingDuration}
        </p>

        {todayRoza.significance && (
          <p className="mt-4 text-sm text-primary/80 italic">⭐ {todayRoza.significance}</p>
        )}

        <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-primary/10">
          <p className="text-right text-lg font-arabic text-primary leading-loose" dir="rtl">
            {todayRoza.duaArabic}
          </p>
          <p className="text-xs text-muted-foreground mt-2 italic">🤲 {todayRoza.duaEnglish}</p>
        </div>

        <p className="mt-6 text-xs text-muted-foreground/50">🌙 Ramadan 1447 AH • Mumbai </p>
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {downloading ? "⏳ Saving..." : "📥 Download as Image"}
        </button>
        
        <button
          onClick={handleWhatsAppShare}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1da851] transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.346.223-.643.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.522 5.85L.053 23.34c-.114.457.299.87.756.756l7.49-1.469C9.882 22.446 11.89 23 14 23c6.627 0 12-5.373 12-12S20.627 0 14 0h-2zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-1.848 0-3.58-.502-5.05-1.364l-.36-.214-4.56.894.894-4.56-.214-.36C2.502 15.58 2 13.848 2 12 2 6.486 6.486 2 12 2z"/>
          </svg>
          WhatsApp
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors border border-primary/20"
        >
          📱 Share via...
        </button>
      </div>
    </section>
  );
};

export default ShareCard;