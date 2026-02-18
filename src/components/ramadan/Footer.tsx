const Footer = () => (
  <footer className="relative z-10 text-center py-12 px-4 border-t border-primary/10">
    <p className="text-2xl font-arabic text-primary/60 mb-2" dir="rtl">
      تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ
    </p>
    <p className="text-sm text-muted-foreground italic mb-4">
      May Allah accept from us and from you
    </p>
    <div className="flex justify-center gap-3 text-2xl mb-4">
      <span>🌙</span><span>🕌</span><span>🤲</span><span>⭐</span><span>📿</span><span>🕋</span>
    </div>
    <p className="text-xs text-muted-foreground/50">
      Ramadan Mubarak 2026 (1447 AH) •  Mumbai, India
    </p>
    <p className="text-xs text-muted-foreground/30 mt-1">
      Times are approximate. Please verify with your local masjid.
    </p>
    <div className="text-lg animate-pulse mt-4">
      Devloped By Waliullah Shaikh
    </div>
  </footer>
);

export default Footer;
