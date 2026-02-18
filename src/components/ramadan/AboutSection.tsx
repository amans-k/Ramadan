import { useEffect, useRef, useState } from "react";

const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

const InfoCard = ({ icon, title, children, delay = "0s" }: { icon: string; title: string; children: React.ReactNode; delay?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`p-6 md:p-8 rounded-2xl bg-card border border-primary/10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: delay }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-3">{title}</h3>
      <div className="text-foreground/80 leading-relaxed text-sm md:text-base space-y-2">{children}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 px-4 py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
          Understanding Ramadan
        </h2>
        <div className="w-24 h-1 bg-primary/40 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <InfoCard icon="🌙" title="What is Ramadan?" delay="0s">
          <p>
            Ramadan is the ninth month of the Islamic lunar calendar. It is the holiest month for Muslims worldwide,
            during which the Quran was first revealed to Prophet Muhammad ﷺ.
          </p>
          <p>
            Muslims fast from dawn (Sehri/Suhoor) to sunset (Iftar/Maghrib), abstaining from food, drink, and
            other physical needs as an act of devotion and spiritual discipline.
          </p>
        </InfoCard>

        <InfoCard icon="🕌" title="Importance of Fasting" delay="0.2s">
          <p>
            Fasting (Sawm/Roza) is one of the Five Pillars of Islam. It teaches self-discipline, empathy for
            the less fortunate, and gratitude for Allah's blessings.
          </p>
          <p>
            The Prophet ﷺ said: <em className="text-primary/90">"Whoever fasts during Ramadan with faith and seeking reward,
            all their past sins will be forgiven."</em> (Bukhari & Muslim)
          </p>
        </InfoCard>

        <InfoCard icon="✨" title="Laylat al-Qadr" delay="0.4s">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-primary/5 animate-glow-pulse pointer-events-none" />
            <p>
              The Night of Power (Laylat al-Qadr) is better than a thousand months (Quran 97:3).
              It falls on one of the odd nights in the last 10 days of Ramadan.
            </p>
            <p className="mt-2 font-semibold text-primary">
              📅 Most likely: 27th Ramadan — Sunday, March 15, 2026
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              🤲 Seek it on all odd nights: 21st, 23rd, 25th, 27th & 29th
            </p>
          </div>
        </InfoCard>
      </div>
    </section>
  );
};

export default AboutSection;
